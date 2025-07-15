<template>
  <div class="laser-banner mt-5">
    <h1>🎉 Chúc Mừng Sinh Nhật Em Bé Của Anh! 🎂</h1>
  </div>
</template>

<script>
export default { name: 'LaserBirthday' }
</script>

<style scoped>
.laser-banner {
  margin: 30px auto;
  padding: 20px; /* Giảm padding để nhỏ chiều cao */
  max-width: 600px;
  background: #ffebee; /* Màu hồng nhạt */
  border-radius: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.laser-banner::before,
.laser-banner::after {
  content: '';
  position: absolute;
  width: 200%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #e91e63, transparent);
  animation: laser 2s linear infinite;
}
.laser-banner::before { top: 30%; }
.laser-banner::after { top: 70%; animation-delay: 1s; }

@keyframes laser {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.laser-banner h1 {
  position: relative;
  margin: 0;
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 0 10px #e91e63;
}
</style>