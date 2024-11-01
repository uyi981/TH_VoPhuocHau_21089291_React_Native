// src/atoms.js
import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState', // Đặt tên duy nhất cho atom
  default: [], // Khởi tạo trạng thái là một mảng rỗng
});
