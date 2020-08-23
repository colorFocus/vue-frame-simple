import AxiosUtil from "@/utils/AxiosUtil";

var api = {
  //list
  fileList: params => AxiosUtil.get("file/list", params),
  delFile: params => AxiosUtil.post("file/delete", params)
};

export default api;
