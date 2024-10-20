document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 防止表单提交
  alert('消息已发送！感谢你的联系。');
});
