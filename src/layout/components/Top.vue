<template>
  <div class="birthday-header">
    <div class="balloons">
      <div class="balloon" v-for="i in 10" :key="i" :style="balloonStyle(i)"></div>
    </div>
    <div class="marquee">
      <span>🎉 Chúc Mừng Sinh Nhật Tình Yêu Của Anh,! ❤️ Yêu Em Mãi Mãi! 💕</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    balloonStyle(index) {
      const colors = ['#e91e63', '#ff4081', '#f06292', '#ba68c8', '#ce93d8'];
      const delay = (index * 0.5) + 's';
      const left = (Math.random() * 90) + '%'; // Vị trí ngẫu nhiên từ 0% đến 90%
      return {
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: delay,
        left: left
      };
    }
  }
};
</script>

<style scoped>
.birthday-header {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #fce4ec;
  border-bottom: 2px solid #f06292;
  overflow: hidden;
}

/* Hiệu ứng bóng bay */
.balloons {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.balloon {
  position: absolute;
  width: 30px;
  height: 40px;
  background: #e91e63;
  border-radius: 50% 50% 20% 20%;
  animation: float 6s infinite ease-in-out;
}

@keyframes float {
  0% { transform: translateY(100vh); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(-20vh); opacity: 0; }
}

/* Marquee */
.marquee {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
}

.marquee span {
  display: inline-block;
  white-space: nowrap;
  padding-left: 100%;
  animation: marquee 12s linear infinite;
  font-size: 1.5rem;
  color: #e91e63;
  font-weight: bold;
  font-family: 'Dancing Script', cursive, sans-serif;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

/* Responsive */
@media (max-width: 768px) {
  .birthday-header {
    height: 80px;
  }
  .marquee span {
    font-size: 1.2rem;
  }
}
</style>