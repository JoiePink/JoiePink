<template>
  <div class="wang-editor-wrapper">
    <Toolbar class="wang-editor-toolbar" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor
      class="wang-editor-content"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      :style="styles"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { propTypes } from "@/utils/propTypes";
import { globalHeaders } from "@/utils/request";
import request from "@/utils/request";

const props = defineProps({
  /* 编辑器的内容 */
  modelValue: propTypes.string,
  /* 高度 */
  height: propTypes.number.def(400),
  /* 最小高度 */
  minHeight: propTypes.number.def(400),
  /* 只读 */
  readOnly: propTypes.bool.def(false),
  /* 上传文件大小限制(MB) */
  fileSize: propTypes.number.def(5),
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const mode = "default";
const editorRef = shallowRef();
const valueHtml = ref("");

const styles = computed(() => {
  const style: Record<string, string> = {};
  if (props.minHeight) {
    style.minHeight = `${props.minHeight}px`;
  }
  if (props.height) {
    style.height = `${props.height}px`;
  }
  return style;
});

const toolbarConfig = {}; // 默认配置
const editorConfig = {
  placeholder: "请输入内容...",
  readOnly: props.readOnly,
  MENU_CONF: {
    uploadImage: {
      headers: globalHeaders(),
      async customUpload(file: File, insertFn: (url: string, alt?: string, href?: string) => void) {
        const typeList = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/svg+xml"];
        if (!typeList.includes(file.type)) {
          proxy?.$modal.msgError("图片格式错误，仅支持 jpg/jpeg/png/webp/svg");
          return;
        }
        if (props.fileSize && file.size / 1024 / 1024 >= props.fileSize) {
          proxy?.$modal.msgError(`上传文件大小不能超过 ${props.fileSize} MB!`);
          return;
        }

        try {
          proxy?.$modal.loading("正在上传文件，请稍候...");
          const formData = new FormData();
          formData.append("file", file);
          const res = await request({
            url: "/resource/oss/upload",
            method: "post",
            data: formData,
            headers: {
              ...globalHeaders(),
              "Content-Type": "multipart/form-data",
            },
          });
          const responseData: any = res;
          const code = responseData?.code;
          const imageUrl = responseData?.data?.url || responseData?.url;
          if (code === 200 && imageUrl) {
            insertFn(imageUrl);
          } else {
            proxy?.$modal.msgError(responseData?.msg || "上传文件失败，未获取到图片地址");
          }
        } catch (err: any) {
          const msg = err?.response?.data?.msg || err?.message || "上传文件失败";
          proxy?.$modal.msgError(msg);
        } finally {
          proxy?.$modal.closeLoading();
        }
      },
    },
  },
};

watch(
  () => props.modelValue,
  (value) => {
    if (value !== valueHtml.value) {
      valueHtml.value = value === undefined ? "<p></p>" : value;
    }
  },
  { immediate: true }
);

const handleCreated = (editor: any) => {
  editorRef.value = editor;
};

const handleChange = () => {
  emit("update:modelValue", valueHtml.value);
};

watch(
  () => props.readOnly,
  (readOnly) => {
    const editor = editorRef.value;
    if (!editor) return;
    if (readOnly) {
      editor.disable();
    } else {
      editor.enable();
    }
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (!editor) return;
  editor.destroy();
  editorRef.value = null;
});
</script>

<style scoped>
.wang-editor-wrapper {
  border: 1px solid #dcdfe6;
}

.wang-editor-toolbar {
  border-bottom: 1px solid #dcdfe6;
}

.wang-editor-content {
  overflow-y: hidden;
}
</style>