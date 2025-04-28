<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t("message.hello") }}</h1>
        <h2>{{ $t("message.welcome") }}</h2>
        <p>{{ $t("message.app_description") }}</p>
        <div class="cta-buttons">
          <button class="btn primary">{{ $t("button.submit") }}</button>
          <button class="btn secondary">{{ $t("button.cancel") }}</button>
        </div>
      </div>
    </section>

    <section class="intro">
      <div class="intro-text">
        <h2 class="section-title">
          {{ $t("message.eleganza_beauty") }}
        </h2>
        <p>
          {{ $t("message.eleganza_beauty_desc") }}
        </p>
      </div>
      <div class="intro-image">
        <div class="image-placeholder elegant">
          <span>✧</span>
        </div>
      </div>
    </section>

    <section class="features">
      <h2 class="section-title">{{ $t("message.features_title") }}</h2>
      <div class="feature-grid">
        <div class="feature-item">
          <div class="feature-icon">✧</div>
          <h3>{{ $t("message.feature_multilingual") }}</h3>
          <p>{{ $t("message.feature_multilingual_desc") }}</p>
          <a href="#" class="learn-more">{{ $t("message.details") }}</a>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✧</div>
          <h3>{{ $t("message.feature_realtime") }}</h3>
          <p>{{ $t("message.feature_realtime_desc") }}</p>
          <a href="#" class="learn-more">{{ $t("message.details") }}</a>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✧</div>
          <h3>{{ $t("message.feature_responsive") }}</h3>
          <p>{{ $t("message.feature_responsive_desc") }}</p>
          <a href="#" class="learn-more">{{ $t("message.details") }}</a>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✧</div>
          <h3>{{ $t("message.feature_performance") }}</h3>
          <p>{{ $t("message.feature_performance_desc") }}</p>
          <a href="#" class="learn-more">{{ $t("message.details") }}</a>
        </div>
      </div>
    </section>

    <section class="why-choose-us">
      <h2 class="section-title">{{ $t("message.why_choose_us") }}</h2>
      <div class="reasons-grid">
        <div class="reason-item">
          <div class="reason-number">01</div>
          <h3>{{ $t("message.reason1_title") }}</h3>
          <p>{{ $t("message.reason1_desc") }}</p>
        </div>
        <div class="reason-item">
          <div class="reason-number">02</div>
          <h3>{{ $t("message.reason2_title") }}</h3>
          <p>{{ $t("message.reason2_desc") }}</p>
        </div>
        <div class="reason-item">
          <div class="reason-number">03</div>
          <h3>{{ $t("message.reason3_title") }}</h3>
          <p>{{ $t("message.reason3_desc") }}</p>
        </div>
        <div class="reason-item">
          <div class="reason-number">04</div>
          <h3>{{ $t("message.reason4_title") }}</h3>
          <p>{{ $t("message.reason4_desc") }}</p>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h2 class="section-title">{{ $t("message.testimonials") }}</h2>
      <div class="testimonial-grid">
        <div class="testimonial-item">
          <div class="testimonial-content">
            <p>"{{ $t("message.testimonial_jp") }}"</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">👩</div>
            <div class="author-info">
              <p class="author-name">鈴木 典子</p>
              <p class="author-location">東京</p>
            </div>
          </div>
        </div>
        <div class="testimonial-item">
          <div class="testimonial-content">
            <p>"{{ $t("message.testimonial_en") }}"</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">👩</div>
            <div class="author-info">
              <p class="author-name">Emma Johnson</p>
              <p class="author-location">New York</p>
            </div>
          </div>
        </div>
        <div class="testimonial-item">
          <div class="testimonial-content">
            <p>"{{ $t("message.testimonial_cn") }}"</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">👩</div>
            <div class="author-info">
              <p class="author-name">张 丽</p>
              <p class="author-location">上海</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-content">
        <h2>{{ $t("message.first_step_title") }}</h2>
        <p>{{ $t("message.first_step_desc") }}</p>
        <button class="btn primary large">{{ $t("button.submit") }}</button>
      </div>
    </section>
  </div>
</template>

<script setup>
// コンポーネントのロジック
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  background: linear-gradient(135deg, #8c7569 0%, #d4b08c 100%);
  color: white;
  padding: 120px 0;
  margin-bottom: 80px;
  border-radius: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><path d="M0,0 L100,100 M100,0 L0,100" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></svg>');
  background-size: 20px 20px;
  opacity: 0.3;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: 3.2rem;
  margin-bottom: 5px;
  font-weight: 300;
  letter-spacing: 3px;
}

.hero h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.9);
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.8;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 60px;
  color: #8c7569;
  font-weight: 300;
  letter-spacing: 2px;
  position: relative;
}

.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 1px;
  background-color: #d4b08c;
  margin: 15px auto 0;
}

.accent-text {
  color: #d4b08c;
  font-style: italic;
}

.intro {
  display: flex;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
  padding: 0 20px;
}

.intro-text {
  flex: 1;
}

.intro-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.intro-image {
  flex: 1;
}

.image-placeholder.elegant {
  background-color: #f8f4f0;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  position: relative;
}

.image-placeholder.elegant::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 1px solid rgba(212, 176, 140, 0.3);
}

.image-placeholder span {
  font-size: 4rem;
  color: #d4b08c;
}

.btn {
  padding: 14px 28px;
  border: none;
  border-radius: 0;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.btn.primary {
  background-color: #d4b08c;
  color: white;
}

.btn.primary:hover {
  background-color: #c19b77;
}

.btn.secondary {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.btn.secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn.large {
  padding: 16px 36px;
  font-size: 1.1rem;
}

section {
  margin-bottom: 100px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 0 20px;
}

.feature-item {
  background-color: white;
  padding: 40px 30px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  border: 1px solid #f0ebe5;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #d4b08c;
}

.feature-item h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #8c7569;
  font-weight: 300;
  letter-spacing: 1px;
}

.feature-item p {
  margin-bottom: 20px;
  color: #666;
  line-height: 1.6;
}

.learn-more {
  display: inline-block;
  color: #d4b08c;
  font-size: 0.9rem;
  position: relative;
  padding-bottom: 2px;
}

.learn-more::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #d4b08c;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.learn-more:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.why-choose-us {
  padding: 80px 20px;
  background-color: #f8f4f0;
  margin: 100px 0;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.reason-item {
  text-align: center;
  padding: 30px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.reason-number {
  font-size: 2.5rem;
  color: #d4b08c;
  margin-bottom: 15px;
  font-weight: 200;
}

.reason-item h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #8c7569;
  font-weight: 300;
}

.reason-item p {
  color: #666;
  line-height: 1.6;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 0 20px;
}

.testimonial-item {
  background-color: white;
  padding: 40px 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid #f0ebe5;
  transition: transform 0.3s ease;
}

.testimonial-item:hover {
  transform: translateY(-5px);
}

.testimonial-content {
  font-style: italic;
  margin-bottom: 25px;
  line-height: 1.8;
  color: #555;
  position: relative;
}

.testimonial-content::before {
  content: '"';
  font-size: 3rem;
  color: #f0ebe5;
  position: absolute;
  top: -15px;
  left: -10px;
  z-index: -1;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  font-size: 1.8rem;
  margin-right: 15px;
}

.author-name {
  font-weight: 500;
  color: #8c7569;
  margin-bottom: 2px;
}

.author-location {
  font-size: 0.9rem;
  color: #888;
}

.cta-section {
  background: linear-gradient(135deg, #8c7569 0%, #d4b08c 100%);
  padding: 80px 20px;
  color: white;
  text-align: center;
  margin: 80px 0 0 0;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 2px;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0;
  }

  .hero h1 {
    font-size: 2.2rem;
  }

  .hero h2 {
    font-size: 1.8rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }

  .intro {
    flex-direction: column;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 40px;
  }
}
</style>
