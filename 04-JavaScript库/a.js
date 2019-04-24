function setPerson(obj) {
  var person = {};
  person.name = obj.name || "小明";
  person.age = obj.age || 20;
  person.sex = obj.sex || "male";
  person.addr = obj.addr || "中国";
}

setPerson({
  name: "小花",
  age: 40,
  addr: "美国"
});
