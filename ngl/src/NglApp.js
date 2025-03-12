
import React, { useState } from "react";
import NglMemberList from "./Components/NglMemberList";
import NglMemberAdd from "./Components/NglMemberAdd";

const NglApp = () => {
  // Khởi tạo danh sách thành viên với state
  const [members, setMembers] = useState([
    { id: "230001", fullname: " nghiem gia long", username: "ngl", password: "123456" },
    { id: "230002", fullname: "NVB", username: "tranthib", password: "abcdef" },
    { id: "230003", fullname: " NVC", username: "levanc", password: "qwerty" },
  ]);

  // Hàm thêm thành viên mới
  const addMember = (member) => {
    setMembers([...members, member]);
  };

  // Hàm xóa thành viên theo ID
  const removeMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  // Hàm cập nhật thông tin thành viên
  const updateMember = (updatedMember) => {
    setMembers(members.map(member => (member.id === updatedMember.id ? updatedMember : member)));
  };

  return (
    <div>
      <h1>Danh sách thành viên</h1>
      <NglMemberList members={members} removeMember={removeMember} updateMember={updateMember} />
      <NglMemberAdd addMember={addMember} />
    </div>
  );
};

export default NglApp;