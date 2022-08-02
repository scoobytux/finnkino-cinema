import axiosClient from "./config/axiosClient";

const resourceName = "QuanLyNguoiDung/";

const userApi = {
  login: (user) => {
    const url = resourceName + "DangNhap";
    return axiosClient.post(url, user);
  },
  register: (user) => {
    const url = resourceName + "DangKy";
    return axiosClient.post(url, user);
  },
  getUser: () => {
    const url = resourceName + "ThongTinTaiKhoan";
    return axiosClient.post(url);
  },
  getUserList: (params) => {
    const url = resourceName + "LayDanhSachNguoiDung";
    return axiosClient.get(url, { params });
  },
  getUserDetails: (params, keyword) => {
    const url = resourceName + `LayDanhSachNguoiDung?MaNhom=${params.maNhom}&tuKhoa=${keyword}`;
    return axiosClient.get(url);
  },
  deleteUser: (userAccount) => {
    const url = resourceName + `XoaNguoiDung?TaiKhoan=${userAccount}`;
    return axiosClient.delete(url);
  },
  addUser: (formData) => {
    const url = resourceName + "ThemNguoiDung";
    return axiosClient.post(url, formData);
  },
  searchUser: (groupId, keyword) => {
    let url;
    if (keyword === "") {
      url = resourceName + `TimKiemNguoiDung?MaNhom=${groupId}`;
    } else {
      url = resourceName + `TimKiemNguoiDung?MaNhom=${groupId}&tuKhoa=${keyword}`;
    }
    return axiosClient.get(url);
  },
  editUser: (userAccount) => {
    const url = resourceName + "CapNhatThongTinNguoiDung";
    return axiosClient.post(url, userAccount);
  },
};

export default userApi;
