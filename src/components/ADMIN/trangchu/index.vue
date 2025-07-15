<template>
  <div class="video-container">
    <iframe :src="embedUrl" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media"
      allowfullscreen></iframe>
  </div>
  <div class="card bg-secondary">
    <div class="row">
      <div class="card">
        <div class="card-header bg-danger-subtle text-danger-emphasis">
          <h5 class="text-center">Cùng nhao xem lại nha</h5>
        </div>
      </div>
      <div class="card">
        <div class="row">
          <div class="col-lg-6 col-6">
            <span>
              Em bé của anh lúc này thì tụi mình vẫn là bạn nè
            </span>
          </div>
          <div class="col-lg-6 col-6">
            <img class="img-fluid w-100" src="/src/assets/anhBE/HPPD/8.png" alt="">
          </div>
        </div>
      </div>
      <div class="card">
        <div class="row">
          <div class="col-lg-6 col-6">
            <img class="img-fluid w-100" src="/src/assets/anhBE/HPPD/9.png" alt="">
          </div>
          <div class="col-lg-6 col-6">
            <span>
              Em bé của anh lúc này thì tụi mình vẫn là bạn nè, có lẽ hơi thân nhá
            </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="row">
          <div class="col-lg-6 col-6">
            <span>
              Lúc này tụi mình đã là của nhau, đón sinh nhật cùng bé nhưng a lại cần xin lỗi em bé tớ nhiều
            </span>
          </div>
          <div class="col-lg-6 col-6">
            <img class="img-fluid w-100" src="/src/assets/anhBE/HPPD/10.png" alt="">
          </div>
        </div>
      </div>
      <div class="card">
        <div class="row">
          <div class="col-lg-6 col-6">
            <img class="img-fluid w-100" src="/src/assets/anhBE/HPPD/11.png" alt="">
          </div>
          <div class="col-lg-6 col-6">
            <span>
              Năm nay đã có thể bên cạnh bé được rồi, bù cho năm ngoái ❤️❤️
            </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-footer bg-info">
          <h5 class="text-center">Chúng ta cố gắng để có thêm nhiều thêm 💕💕</h5>
        </div>
      </div>
    </div>
  </div>
   <div class="row mt-5 bg-secondary">
        <h3 class="text-center text-white"> Em Bé Của Tôii</h3>
        <div class="card">
          <div class="card-body">
            <img class="card-img" src="/src/assets/anhBE/HPPD/1.png" alt="">
          </div>
        </div>
      </div>
  <div class="mt-4">
    <h3 class="text-center text-uppercase"><b>Chọn 1 cái để xem nha em</b></h3>
  </div>
  
  <!-- Button Container -->
  <div class="button-container">
    <div class="row text-center">
      <div class="col-lg-4 col-4">
        <button class="btn btn-3d w-100" @click="toggleCarousel('memory')" :class="{ active: showCarousel.memory }">
          Kỉ niệm 💞
        </button>
      </div>
      <div class="col-lg-4 col-4">
        <button class="btn btn-3d w-100" @click="toggleCarousel('wishes')" :class="{ active: showCarousel.wishes }">
          Lời Chúc 💞
        </button>
      </div>
      <div class="col-lg-4 col-4">
        <button class="btn btn-3d w-100" @click="toggleCarousel('days')" :class="{ active: showCarousel.days }">
          Số ngày 💞
        </button>
      </div>
    </div>
    
    <!-- Dropdown Content Container -->
    <div class="dropdown-content-container" v-if="hasActiveCarousel">
      <div class="dropdown-content">
        <!-- Memory Carousel -->
        <div v-if="showCarousel.memory" class="content-section">
          <h4 class="text-center mb-3">Kỉ niệm lướt để xem nha 💞</h4>
          <div id="memoryCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/src/assets/anhBE/HPPD/2.png" class="d-block w-100 carousel-image" alt="Memory 1">
              </div>
              <div class="carousel-item">
                <img src="/src/assets/anhBE/HPPD/3.png" class="d-block w-100 carousel-image" alt="Memory 2">
              </div>
              <div class="carousel-item">
                <img src="/src/assets/anhBE/HPPD/4.png" class="d-block w-100 carousel-image" alt="Memory 3">
              </div>
               <div class="carousel-item">
                <img src="/src/assets/anhBE/HPPD/5.png" class="d-block w-100 carousel-image" alt="Memory 3">
              </div>
               <div class="carousel-item">
                <img src="/src/assets/anhBE/HPPD/6.png" class="d-block w-100 carousel-image" alt="Memory 3">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#memoryCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#memoryCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        
        <!-- Wishes Content -->
        <div v-if="showCarousel.wishes" class="content-section">
          <h4 class="text-center mb-3">Lời chúc dành cho em 💞</h4>
          <div class="wishes-content">
            <div class="wish-item">
              <h5>💕 Chúc em sinh nhật vui vẻ</h5>
              <p>Anh chúc bé sinh nhật vẻ nha ,năm 20 tuổi thật là rực rỡ luôn nha bé ❤️</p>
            </div>
            <div class="wish-item">
              <h5>💕 Chúc em luôn xinh đẹp</h5>
              <p>Em luôn là cô gái xinh đẹp nhất trong mắt anh,bởi vì bé luôn luôn là duy nhất đối với anh</p>
            </div>
            <div class="wish-item">
              <h5>💕 Chúc em luôn hạnh phúc và bên anh</h5>
              <p>Anh mong em luôn vui vẻ và hạnh phúc mỗi ngày nụ cười luôn hé nhá cạuu ,đôi khi có chút buồn nhưng cố gắn lênn nhaa ~</p>
            </div>
            <div class="wish-item">
              <h5>💕 Chúc em thành công</h5>
              <p>Mong em đạt được tất cả những gì em mong muốn, chúc bé muôn vàn thành công trong đời nhá</p>
            </div>
            <div class="wish-item">
              <h5>💕 Chúc em và anh</h5>
              <p>Mong tụi mình sẽ mãi  keooo, a mong chúc ta sẽ có thêm thật nhiều kĩ niệm cùng nhauu</p>
              <p>Hong dám nói điều gì sauu xa nhưng vẫn mong cái gì đó xa xa</p>
            </div>
          </div>
        </div>
        
        <!-- Days Content -->
        <div v-if="showCarousel.days" class="content-section">
          <h4 class="text-center mb-3">Số ngày của bé 💞</h4>
          <div class="days-content">
            <div class="day-counter">
              <div class="counter-item">
                <h3>{{ daysCount }}</h3>
                <p>Ngày hạnh phúc</p>
              </div>
              <div class="counter-item">
                <h3>{{ hoursCount }}</h3>
                <p>Giờ hạnh phúc</p>
              </div>
              <div class="counter-item">
                <h3>{{ minutesCount }}</h3>
                <p>Phút yêu thương</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
     
  <!-- Spacer to prevent overlap -->
  <div class="content-spacer" :style="{ height: spacerHeight + 'px' }"></div>
  
  <div class="row additional-content">
    <div class="col-lg-12 col-12">
      <div class="love-notes-card">
        <h4 class="card-title">💕 Lịch trình cho hôm đii chơi </h4>
        <div class="love-list">
          <div class="love-item" v-for="(item, index) in loveThings" :key="index">
            <div class="love-icon">{{ item.icon }}</div>
            <div class="love-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row additional-content">
    <div class="col-lg-12 col-12">
      <div class="future-plans-card">
        <h4 class="card-title">🌟 Thời gian quá trình của chúng ta</h4>
        <div class="timeline">
          <div class="timeline-item" v-for="(plan, index) in futurePlans" :key="index">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">{{ plan.date }}</div>
              <div class="timeline-title">{{ plan.title }}</div>
              <div class="timeline-desc">{{ plan.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center my-3">
    <!-- Thẻ audio HTML5 -->
    <audio ref="myAudio" :src="audioSrc" preload="auto"></audio>

    <!-- Nút Bootstrap điều khiển -->
    <button class="btn btn-success me-2" @click="playAudio">▶️ nghe mà cảm nhận </button>
    <!-- <button class="btn btn-danger" @click="pauseAudio">⏸️ Dừng nhạc</button> -->
  </div>

  <!-- Memory Game Section -->
  <div class="row additional-content">
    <div class="col-lg-12 col-12">
      <div class="memory-game-card">
        <h4 class="card-title">🎮 Memory Game - Ghép hình kỷ niệm 💖</h4>
        
        <!-- Game Stats -->
        <div class="game-stats">
          <div class="stat-item">
            <span class="stat-label">Lượt chơi:</span>
            <span class="stat-value">{{ gameStats.moves }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Thời gian:</span>
            <span class="stat-value">{{ formatTime(gameStats.time) }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Đã ghép:</span>
            <span class="stat-value">{{ gameStats.matched }}/{{ memoryCards.length / 2 }}</span>
          </div>
        </div>

        <!-- Game Controls -->
        <div class="game-controls">
          <button class="btn-game" @click="startGame" :disabled="gameState === 'playing'">
            {{ gameState === 'idle' ? 'Bắt đầu chơi' : gameState === 'playing' ? 'Đang chơi...' : 'Chơi lại' }}
          </button>
          <button class="btn-game" @click="resetGame" v-if="gameState !== 'idle'">
            Làm lại
          </button>
        </div>

        <!-- Memory Game Grid -->
        <div class="memory-grid" v-if="gameState !== 'idle'">
          <div 
            v-for="(card, index) in memoryCards" 
            :key="index"
            class="memory-card"
            :class="{ 
              'flipped': card.isFlipped, 
              'matched': card.isMatched,
              'disabled': isCardDisabled
            }"
            @click="flipCard(index)"
          >
            <div class="card-front">
              <div class="card-back-design">💖</div>
            </div>
            <div class="card-back">
              <img :src="card.image" :alt="card.alt" class="memory-image">
              <div class="card-label">{{ card.label }}</div>
            </div>
          </div>
        </div>

        <!-- Win Message -->
        <div v-if="gameState === 'won'" class="win-message">
          <h3>🎉 Chúc mừng bé! 🎉</h3>
          <p>Bé đã ghép thành công tất cả kỷ niệm của chúng ta!</p>
          <p>Thời gian: {{ formatTime(gameStats.time) }} | Lượt chơi: {{ gameStats.moves }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Gift Box Section - Thêm vào sau Memory Game Section -->
<div class="row additional-content">
  <div class="col-lg-12 col-12">
    <div class="gift-box-card">
      <h4 class="card-title">🎁 Hộp quà bất ngờ dành cho em 💝</h4>
      
      <!-- Gift Box Container -->
      <div class="gift-container">
        <div 
          class="gift-box"
          :class="{ 'opened': isGiftOpened, 'shaking': isGiftShaking }"
          @click="openGift"
        >
          <!-- Gift Box Lid -->
          <div class="gift-lid">
            <div class="gift-bow">🎀</div>
          </div>
          
          <!-- Gift Box Base -->
          <div class="gift-base">
            <div class="gift-pattern"></div>
          </div>
          
          <!-- Gift Box Ribbon -->
          <div class="gift-ribbon-v"></div>
          <div class="gift-ribbon-h"></div>
        </div>
        
        <!-- Click Instruction -->
        <div class="gift-instruction" v-if="!isGiftOpened">
          <p>👆 Click vào hộp quà để mở nha em! 👆</p>
        </div>
      </div>
      
      <!-- Gift Content - Hiển thị sau khi mở -->
      <div class="gift-content" v-if="isGiftOpened">
        <div class="gift-reveal">
          
          
          <!-- Gift Image -->
          <div class="gift-image-container">
            <img 
                src="/src/assets/anhBE/HPPD/7.png" 
              alt="Món quà đặc biệt" 
              class="gift-image "
            >
            <div class="image-frame"></div>
          </div>
          
          <!-- Gift Message -->
          <div class="gift-message">
            <div class="message-content">
              <h5>💌 Lời nhắn từ anh:</h5>
              <p>"Em là món quà quý giá nhất mà cuộc đời trao tặng cho anh. Chúc em bé sinh nhật thật hạnh phúc và luôn tỏa sáng như ngôi sao trong trái tim anh! 🌟"</p>
              <div class="message-signature">
                <span>- Với tình yêu vô tận 💕</span>
              </div>
            </div>
          </div>
          <div>
              <h4 class="text-dark">Trước khi đóng lại thì quét mã này nhaaa</h4>
              <img class="img-fluid w-100" src="/src/assets/anhBE/HPPD/qr.png">
            </div>
          <!-- Reset Button -->
          <div class="gift-actions">
            
            <button class="btn-reset-gift" @click="resetGift">
              🔄 Đóng hộp quà lại
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      isGiftOpened: false,
    isGiftShaking: false,
      audioSrc: '/src/assets/audio/1.mp4.mp3',
      videoId: "GD_KNDmb5as", // ID video YouTube
      startTime: 30,           // Bắt đầu từ giây thứ 30
      endTime: null,           // Kết thúc tại giây nào (null = không giới hạn)
      showCarousel: {
        memory: false,
        wishes: false,
        days: false
      },
      startDate: new Date('2005-07-17'), // Ngày bắt đầu yêu (thay đổi theo thực tế)
      loveThings: [
        { icon: '🌜', text: '6h30 anh sẽ qua rước bé nha' },
        { icon: '💖', text: '7h Rồi mình sẽ đi ăn  nhaa' },
        { icon: '🎵', text: '9h mình đi xem phim or photo' },
        { icon: '👀', text: 'Xong rồiii thi đi dạo nhaa' },
        { icon: '😘', text: 'Rồi mình về nè nhaa' },
      ],
      futurePlans: [
        { date: '2023', title: 'Lần đầu tiên sinh nhật có nhau', description: 'Nhưng lại vắng bóng dáng toi:((  ' },
        { date: '2024', title: 'Lần thứ hai sinh nhật có nhau', description: 'Có thể bù đắp yêu thương cho bé' },
        { date: '2023', title: 'Lần thứ ba', description: 'Mong vẫn là Văn Dinh' },
        { date: '2026', title: 'Lần thứ bốn', description: 'Vẫn mong là anh' },
        { date: '....', title: '...', description: '...' },
        { date: '∞', title: 'Mãi về mai sau', description: 'Mong anh sẽ là người yêu thương bé' }
      ],
      additionalLoveThings: [
        { icon: '🌸', text: 'Cách em cười khi ngại ngùng' },
        { icon: '💝', text: 'Tính cách dễ thương' },
        { icon: '🌙', text: 'Giọng ru êm ái' },
        { icon: '🦋', text: 'Vẻ đẹp tự nhiên' },
        { icon: '🍀', text: 'Sự kiên nhẫn với anh' },
        { icon: '🎀', text: 'Phong cách thời trang' }
      ],
      totalMessages: 15847,
      totalCalls: 1249,
      
      // Memory Game Data
      gameState: 'idle', // 'idle', 'playing', 'won'
      memoryCards: [],
      flippedCards: [],
      gameStats: {
        moves: 0,
        time: 0,
        matched: 0
      },
      gameTimer: null,
      isCardDisabled: false,
      
      // Memory card images và labels
      memoryImages: [
        { image: '/src/assets/anhBE/HPPD/12.png', label: 'Cô chúa sa mạc', alt: 'Memory 1' },
        { image: '/src/assets/anhBE/HPPD/13.png', label: 'công chúa miệng chu', alt: 'Memory 2' },
        { image: '/src/assets/anhBE/HPPD/14.png', label: 'Cutee', alt: 'Memory 3' },
        { image: '/src/assets/anhBE/HPPD/15.png', label: 'Đi suối', alt: 'Memory 4' },
        { image: '/src/assets/anhBE/HPPD/16.png', label: 'Không cận mà 🐎🐎', alt: 'Memory 5' },
        { image: '/src/assets/anhBE/HPPD/17.png', label: 'cô gái tóc bayy', alt: 'Memory 6' }
      ]
    };
  },
  computed: {
    embedUrl() {
      const params = [
        "autoplay=1",
        "mute=1",
        "controls=0",
        "showinfo=0",
        "rel=0",
        "modestbranding=1",
        "fs=0",
        "cc_load_policy=0",
        "iv_load_policy=3",
        "autohide=1",
        "disablekb=1",
        "playsinline=1",
        "loop=1",
        `playlist=${this.videoId}`
      ];
      if (this.startTime) {
        params.push(`start=${this.startTime}`);
      }
      if (this.endTime) {
        params.push(`end=${this.endTime}`);
      }
      return `https://www.youtube.com/embed/${this.videoId}?${params.join("&")}`;
    },
    hasActiveCarousel() {
      return Object.values(this.showCarousel).some(value => value);
    },
    spacerHeight() {
      if (!this.hasActiveCarousel) return 0;
      // Tính toán chiều cao ước tính cho mỗi loại content
      if (this.showCarousel.memory) {
        return 400; // Chiều cao cho carousel ảnh
      } else if (this.showCarousel.wishes) {
        return 800; // Chiều cao cho lời chúc (nhiều text)
      } else if (this.showCarousel.days) {
        return 600; // Chiều cao cho counter
      }
      return 0;
    },
    daysCount() {
      const now = new Date();
      const diffTime = Math.abs(now - this.startDate);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },
    hoursCount() {
      return this.daysCount * 24;
    },
    minutesCount() {
      return this.hoursCount * 60;
    }
  },
  methods: {
    openGift() {
    if (!this.isGiftOpened) {
      this.isGiftShaking = true;
      
      setTimeout(() => {
        this.isGiftShaking = false;
        this.isGiftOpened = true;
      }, 500);
    }
  },
  
  resetGift() {
    this.isGiftOpened = false;
    this.isGiftShaking = false;
  },
    playAudio() {
    this.$refs.myAudio.play().catch(error => {
      console.error('Lỗi khi phát nhạc:', error);
    });
  },
   pauseAudio() {
    this.$refs.myAudio.pause();
  },
    toggleCarousel(carouselName) {
      // If clicking the same button, toggle it off
      if (this.showCarousel[carouselName]) {
        this.showCarousel[carouselName] = false;
      } else {
        // Reset all carousels to hidden
        for (let key in this.showCarousel) {
          this.showCarousel[key] = false;
        }
        // Show the selected carousel
        this.showCarousel[carouselName] = true;
      }
    },
    
    addRandomLove() {
      if (this.additionalLoveThings.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.additionalLoveThings.length);
        const randomLove = this.additionalLoveThings[randomIndex];
        this.loveThings.push(randomLove);
        this.additionalLoveThings.splice(randomIndex, 1);
        
        // Animation effect
        setTimeout(() => {
          const loveItems = document.querySelectorAll('.love-item');
          const newItem = loveItems[loveItems.length - 1];
          if (newItem) {
            newItem.style.animation = 'heartPulse 0.6s ease-out';
          }
        }, 100);
      }
    },
    
    // Memory Game Methods
    startGame() {
      this.resetGame();
      this.gameState = 'playing';
      this.createMemoryCards();
      this.startTimer();
    },
    
    resetGame() {
      this.gameState = 'idle';
      this.memoryCards = [];
      this.flippedCards = [];
      this.gameStats = {
        moves: 0,
        time: 0,
        matched: 0
      };
      this.isCardDisabled = false;
      if (this.gameTimer) {
        clearInterval(this.gameTimer);
        this.gameTimer = null;
      }
    },
    
    createMemoryCards() {
      // Tạo cặp thẻ từ các hình ảnh
      const cards = [];
      this.memoryImages.forEach((img, index) => {
        // Tạo 2 thẻ giống nhau
        cards.push({
          id: index * 2,
          pairId: index,
          image: img.image,
          label: img.label,
          alt: img.alt,
          isFlipped: false,
          isMatched: false
        });
        cards.push({
          id: index * 2 + 1,
          pairId: index,
          image: img.image,
          label: img.label,
          alt: img.alt,
          isFlipped: false,
          isMatched: false
        });
      });
      
      // Xáo trộn thẻ
      this.memoryCards = this.shuffleArray(cards);
    },
    
    shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    },
    
    flipCard(index) {
      if (this.isCardDisabled || 
          this.memoryCards[index].isFlipped || 
          this.memoryCards[index].isMatched ||
          this.flippedCards.length >= 2) {
        return;
      }
      
      this.memoryCards[index].isFlipped = true;
      this.flippedCards.push(index);
      
      if (this.flippedCards.length === 2) {
        this.gameStats.moves++;
        this.checkMatch();
      }
    },
    
    checkMatch() {
      this.isCardDisabled = true;
      const [firstIndex, secondIndex] = this.flippedCards;
      const firstCard = this.memoryCards[firstIndex];
      const secondCard = this.memoryCards[secondIndex];
      
      setTimeout(() => {
        if (firstCard.pairId === secondCard.pairId) {
          // Ghép thành công
          firstCard.isMatched = true;
          secondCard.isMatched = true;
          this.gameStats.matched++;
          
          // Kiểm tra thắng
          if (this.gameStats.matched === this.memoryImages.length) {
            this.gameState = 'won';
            this.stopTimer();
          }
        } else {
          // Không ghép được, lật ngược lại
          firstCard.isFlipped = false;
          secondCard.isFlipped = false;
        }
        
        this.flippedCards = [];
        this.isCardDisabled = false;
      }, 1000);
    },
    
    startTimer() {
      this.gameTimer = setInterval(() => {
        this.gameStats.time++;
      }, 1000);
    },
    
    stopTimer() {
      if (this.gameTimer) {
        clearInterval(this.gameTimer);
        this.gameTimer = null;
      }
    },
    
    formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  },
  
  beforeDestroy() {
    if (this.gameTimer) {
      clearInterval(this.gameTimer);
    }
  }
};
</script>

<style scoped>
/* Gift Box Styles */
.gift-box-card {
  background: linear-gradient(135deg, #fff0f5, #ffe4e1);
  border: 2px solid #ff99bb;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(255, 153, 187, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
}

.gift-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
}

.gift-box {
  position: relative;
  width: 150px;
  height: 150px;
  cursor: pointer;
  transition: all 0.5s ease;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gift-box:hover {
  transform: scale(1.05);
}

.gift-box.shaking {
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.gift-base {
  width: 100%;
  height: 100px;
  background: linear-gradient(135deg, #ff4757, #ff6b7a);
  border-radius: 10px;
  position: relative;
  box-shadow: 0 8px 20px rgba(255, 71, 87, 0.3);
  overflow: hidden;
}

.gift-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1) 10px,
    transparent 10px,
    transparent 20px
  );
}

.gift-lid {
  position: absolute;
  top: -25px; /* Điều chỉnh vị trí nắp để căn giữa */
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(135deg, #ff3838, #ff5757);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(255, 56, 56, 0.4);
  transition: all 0.8s ease;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.gift-box.opened .gift-lid {
  transform: rotateX(-45deg) translateY(-30px);
  transform-origin: top;
}

.gift-bow {
  position: absolute;
  top: -15px; /* Điều chỉnh vị trí nơ */
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.gift-ribbon-v {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 100%;
  background: linear-gradient(to right, #ffd700, #ffed4e);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.gift-ribbon-h {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 20px;
  background: linear-gradient(to bottom, #ffd700, #ffed4e);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.gift-instruction {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  border: 2px dashed #ff99bb;
  animation: pulse-instruction 2s infinite;
}

@keyframes pulse-instruction {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

.gift-instruction p {
  color: #ff66a5;
  font-weight: bold;
  margin: 0;
  font-size: 1.1rem;
}

.gift-content {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gift-reveal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.surprise-message {
  background: linear-gradient(135deg, #90EE90, #98FB98);
  padding: 20px;
  border-radius: 15px;
  border: 2px solid #32CD32;
  color: #006400;
  box-shadow: 0 4px 15px rgba(50, 205, 50, 0.3);
}

.surprise-message h3 {
  margin-bottom: 10px;
  font-size: 1.6rem;
}

.surprise-message p {
  margin: 0;
  font-size: 1.1rem;
}

.gift-image-container {
  position: relative;
  display: inline-block;
}

.gift-image {
  max-width: 600px;
  max-height: 600px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.gift-image:hover {
  transform: scale(1.05);
}

.image-frame {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 3px solid #ff99bb;
  border-radius: 20px;
  background: linear-gradient(45deg, #ff99bb, #ffb3d6, #ffc0cb, #ff99bb);
  background-size: 400% 400%;
  animation: gradientShift 3s ease infinite;
  z-index: -1;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gift-message {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px;
  border-radius: 15px;
  border: 2px solid #ff99bb;
  box-shadow: 0 4px 15px rgba(255, 153, 187, 0.2);
  max-width: 600px;
  text-align: left;
}

.message-content h5 {
  color: #ff66a5;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.message-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.message-signature {
  text-align: right;
  margin-top: 10px;
}

.message-signature span {
  color: #ff66a5;
  font-style: italic;
  font-weight: bold;
}

.gift-actions {
  margin-top: 20px;
}

.btn-reset-gift {
  background: linear-gradient(135deg, #ff99bb, #ffb3d6);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 153, 187, 0.3);
}

.btn-reset-gift:hover {
  background: linear-gradient(135deg, #ff66a5, #ff99bb);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 153, 187, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .gift-box {
    width: 120px;
    height: 120px;
  }
  
  .gift-base {
    height: 80px;
  }
  
  .gift-image {
    max-width: 400px;
    max-height: 400px;
  }
  
  .gift-message {
    padding: 20px;
    max-width: 400px;
  }
}

@media (max-width: 480px) {
  .gift-box {
    width: 100px;
    height: 100px;
  }
  
  .gift-base {
    height: 70px;
  }
  
  .gift-image {
    max-width: 300px;
    max-height: 300px;
  }
  
  .gift-message {
    padding: 15px;
    max-width: 300px;
  }
  
  .message-content h5 {
    font-size: 1.1rem;
  }
  
  .message-content p {
    font-size: 1rem;
  }
}
.btn-3d {
  background-color: #fff0f5;
  border: 2px solid #ff99bb;
  box-shadow: 4px 4px 0 #e07caa;
  transform: translateY(0);
  transition: all 0.3s ease;
  position: relative;
}

.btn-3d:hover {
  background-color: #ffe4e1;
  transform: translateY(-2px);
  box-shadow: 6px 6px 0 #e07caa;
}

.btn-3d:active {
  transform: translateY(2px);
  box-shadow: 2px 2px 0 #d06294;
}

.btn-3d.active {
  background-color: #ff99bb;
  color: white;
  transform: translateY(2px);
  box-shadow: 2px 2px 0 #d06294;
}

.title-3d {
  font-size: 2rem;
  color: #ff66a5;
  text-shadow: 2px 2px 0 #fff, 4px 4px 0 #ffc0cb;
}

.video-container {
  position: fixed;
  top: -50px;
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 10%;
  left: 50%;
  width: 300vw;
  height: 120vh;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border: none;
}

.button-container {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.dropdown-content-container {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: 10px;
}

.dropdown-content {
  background: white;
  border: 2px solid #ff99bb;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(255, 153, 187, 0.3);
  padding: 20px;
  width: 100%;
  animation: slideDown 0.3s ease-out;
}

.content-spacer {
  transition: height 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-section {
  width: 100%;
}

.content-section h4 {
  color: #ff66a5;
  font-weight: bold;
  margin-bottom: 20px;
}

.carousel-image {
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
}

.wishes-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.wish-item {
  background: linear-gradient(135deg, #fff0f5, #ffe4e1);
  padding: 15px;
  border-radius: 10px;
  border-left: 4px solid #ff99bb;
}

.wish-item h5 {
  color: #ff66a5;
  margin-bottom: 8px;
}

.wish-item p {
  color: #666;
  margin: 0;
}

.days-content {
  display: flex;
  justify-content: center;
  width: 100%;
}

.day-counter {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
}

.counter-item {
  text-align: center;
  background: linear-gradient(135deg, #fff0f5, #ffe4e1);
  padding: 20px;
  border-radius: 15px;
  border: 2px solid #ff99bb;
  box-shadow: 0 4px 10px rgba(255, 153, 187, 0.2);
  transition: transform 0.3s ease;
}

.counter-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(255, 153, 187, 0.3);
}

.counter-item h3 {
  color: #ff66a5;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 2px 2px 0 #fff;
}

.counter-item p {
  color: #666;
  font-size: 1.1rem;
  margin: 0;
}

.additional-content {
  margin-top: 30px;
  margin-bottom: 30px;
}

.love-notes-card {
  background: linear-gradient(135deg, #fff0f5, #ffe4e1);
  border: 2px solid #ff99bb;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(255, 153, 187, 0.3);
  position: relative;
  overflow: hidden;
}

.love-notes-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 192, 203, 0.1) 0%, transparent 70%);
  animation: sparkle 3s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
}

.card-title {
  color: #ff66a5;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.5rem;
  text-shadow: 2px 2px 0 #fff;
}

.love-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.love-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 15px;
  border: 1px solid #ffb3d6;
  transition: all 0.3s ease;
}

.love-item:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateX(10px);
  box-shadow: 0 4px 15px rgba(255, 153, 187, 0.2);
}

.love-icon {
  font-size: 1.5rem;
  margin-right: 15px;
  min-width: 40px;
}

.love-text {
  color: #666;
  font-size: 1.1rem;
  flex: 1;
}

.future-plans-card {
  background: linear-gradient(135deg, #fff0f5, #ffe4e1);
  border: 2px solid #ff99bb;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(255, 153, 187, 0.3);
  position: relative;
}

.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #ff99bb, #ffb3d6);
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 30px;
}

.timeline-dot {
  position: absolute;
  left: -22px;
  top: 5px;
  width: 12px;
  height: 12px;
  background: #ff66a5;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 2px 5px rgba(255, 153, 187, 0.3);
}

.timeline-content {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #ffb3d6;
  box-shadow: 0 4px 10px rgba(255, 153, 187, 0.1);
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 153, 187, 0.2);
}

.timeline-date {
  color: #ff66a5;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.timeline-title {
  color: #333;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.timeline-desc {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}

/* Memory Game Styles */
.memory-game-card {
  background: linear-gradient(135deg, #fff0f5, #ffe4e1);
  border: 2px solid #ff99bb;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(255, 153, 187, 0.3);
  position: relative;
}

.game-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.stat-item {
  background: rgba(255, 255, 255, 0.9);
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid #ffb3d6;
  text-align: center;
  min-width: 120px;
  margin: 5px;
}

.stat-label {
  color: #ff66a5;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.stat-value {
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
}

.game-controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.btn-game {
  background: linear-gradient(135deg, #ff99bb, #ffb3d6);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 153, 187, 0.3);
}

.btn-game:hover:not(:disabled) {
  background: linear-gradient(135deg, #ff66a5, #ff99bb);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 153, 187, 0.4);
}

.btn-game:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.memory-card {
  aspect-ratio: 1;
  perspective: 1000px;
  cursor: pointer;
}

.memory-card.disabled {
  cursor: not-allowed;
}

.memory-card .card-front,
.memory-card .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  transition: transform 0.6s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.memory-card .card-front {
  background: linear-gradient(135deg, #ff99bb, #ffb3d6);
  color: white;
}

.memory-card .card-back {
  background: white;
  border: 2px solid #ff99bb;
  transform: rotateY(180deg);
}

.memory-card.flipped .card-front {
  transform: rotateY(180deg);
}

.memory-card.flipped .card-back {
  transform: rotateY(0deg);
}

.memory-card.matched .card-front,
.memory-card.matched .card-back {
  opacity: 0.7;
}

.memory-card.matched .card-back {
  background: linear-gradient(135deg, #90EE90, #98FB98);
}

.card-back-design {
  font-size: 2rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.memory-image {
  width: 80%;
  height: 60%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 5px;
}

.card-label {
  font-size: 0.8rem;
  color: #ff66a5;
  font-weight: bold;
  text-align: center;
}

.win-message {
  text-align: center;
  background: linear-gradient(135deg, #90EE90, #98FB98);
  padding: 25px;
  border-radius: 20px;
  margin-top: 20px;
  border: 2px solid #32CD32;
  color: #006400;
}

.win-message h3 {
  margin-bottom: 15px;
  font-size: 1.8rem;
}

.win-message p {
  margin: 5px 0;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .video-container iframe {
    width: 400vw;
    height: 150vh;
  }
  
  .day-counter {
    flex-direction: column;
    gap: 15px;
  }
  
  .counter-item h3 {
    font-size: 2rem;
  }
  
  .love-item {
    padding: 12px;
  }
  
  .timeline-item {
    padding-left: 20px;
  }
  
  .timeline-content {
    padding: 15px;
  }
  
  .memory-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  
  .game-stats {
    flex-direction: column;
    align-items: center;
  }
  
  .stat-item {
    min-width: 100px;
  }
}

@media (max-width: 480px) {
  .btn-3d {
    padding: 10px 8px;
    font-size: 0.9rem;
  }
  
  .love-notes-card,
  .future-plans-card,
  .memory-game-card {
    padding: 20px;
  }
  
  .card-title {
    font-size: 1.3rem;
  }
  
  .memory-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Heart Animation */
@keyframes heartPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Glowing Effect */
.love-notes-card:hover,
.future-plans-card:hover,
.memory-game-card:hover {
  box-shadow: 0 8px 30px rgba(255, 153, 187, 0.4);
}

/* Smooth Transitions */
* {
  transition: all 0.3s ease;
}
</style>