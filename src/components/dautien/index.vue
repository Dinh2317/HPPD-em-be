<template>
  <div class="sparkling-background">
    <h1 class="birthday-text">Chào mừng em bé❤️</h1>
    <a href="/trangchu" class="next-button">Bắt đầu thôi</a>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SparklingBirthday',
});
</script>

<style scoped>
.sparkling-background {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #ffdde1, #ffccd5); /* Gradient hồng nhạt sang hồng đậm */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.sparkling-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 182, 193, 0.3) 10%, transparent 20%) repeat;
  background-size: 30px 30px; /* Tăng kích thước hạt lấp lánh */
  animation: sparkle 6s infinite linear; /* Tăng thời gian animation cho hiệu ứng mượt hơn */
  opacity: 0.7;
}

@keyframes sparkle {
  0% { transform: translate(0, 0); }
  100% { transform: translate(30px, 30px); }
}

.birthday-text {
  font-family: 'Dancing Script', cursive;
  font-size: 4rem;
  color: #ff69b4;
  text-shadow: 0 0 15px rgba(255, 105, 180, 0.8);
  z-index: 1001;
  margin-bottom: 30px;
}

.next-button {
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(45deg, #ff69b4, #ff1493);
  border: none;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.5);
  z-index: 1001;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.next-button:hover {
  transform: scale(1.1);
  box-shadow: 0 7px 20px rgba(255, 105, 180, 0.7);
}

/* Responsive Design cho di động */
@media (max-width: 768px) {
  .birthday-text {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .next-button {
    padding: 10px 20px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .birthday-text {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  .next-button {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
}
</style>