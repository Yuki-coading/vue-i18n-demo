<template>
  <div class="about">
    <h1 class="page-title">{{ $t("message.about_us") }}</h1>

    <section class="clinic-section">
      <div class="clinic-image">
        <div class="placeholder-image"></div>
      </div>
      <div class="clinic-info">
        <h2>{{ $t("message.about_title") }}</h2>
        <p class="clinic-description">{{ $t("message.about_desc") }}</p>
        <div class="clinic-values">
          <div class="value-item">
            <div class="value-icon">✧</div>
            <div class="value-text">
              <h3>{{ $t("message.mission") }}</h3>
              <p>{{ $t("message.mission_desc") }}</p>
            </div>
          </div>
          <div class="value-item">
            <div class="value-icon">✧</div>
            <div class="value-text">
              <h3>{{ $t("message.vision") }}</h3>
              <p>{{ $t("message.vision_desc") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="treatments-section">
      <h2 class="section-title">{{ $t("message.treatments_about") }}</h2>
      <div class="treatment-list">
        <div class="treatment-item">
          <h3>{{ $t("message.feature_multilingual") }}</h3>
          <p>{{ $t("message.feature_multilingual_desc") }}</p>
          <a href="#" class="read-more">{{ $t("message.details") }}</a>
        </div>
        <div class="treatment-item">
          <h3>{{ $t("message.feature_realtime") }}</h3>
          <p>{{ $t("message.feature_realtime_desc") }}</p>
          <a href="#" class="read-more">{{ $t("message.details") }}</a>
        </div>
        <div class="treatment-item">
          <h3>{{ $t("message.feature_responsive") }}</h3>
          <p>{{ $t("message.feature_responsive_desc") }}</p>
          <a href="#" class="read-more">{{ $t("message.details") }}</a>
        </div>
        <div class="treatment-item">
          <h3>{{ $t("message.feature_performance") }}</h3>
          <p>{{ $t("message.feature_performance_desc") }}</p>
          <a href="#" class="read-more">{{ $t("message.details") }}</a>
        </div>
      </div>
    </section>

    <section class="team-section">
      <h2 class="section-title">{{ $t("message.team") }}</h2>
      <div class="team-members">
        <div class="member-card">
          <div class="member-photo dr-tanaka"></div>
          <div class="member-info">
            <h3>{{ $t("message.team_member1") }}</h3>
            <p class="member-title">{{ $t("message.team_member1_title") }}</p>
            <p class="member-bio">{{ $t("message.team_member1_desc") }}</p>
          </div>
        </div>
        <div class="member-card">
          <div class="member-photo dr-suzuki"></div>
          <div class="member-info">
            <h3>{{ $t("message.team_member2") }}</h3>
            <p class="member-title">{{ $t("message.team_member2_title") }}</p>
            <p class="member-bio">{{ $t("message.team_member2_desc") }}</p>
          </div>
        </div>
        <div class="member-card">
          <div class="member-photo dr-kimura"></div>
          <div class="member-info">
            <h3>{{ $t("message.team_member3") }}</h3>
            <p class="member-title">{{ $t("message.team_member3_title") }}</p>
            <p class="member-bio">{{ $t("message.team_member3_desc") }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="international-section">
      <h2 class="section-title">{{ $t("message.langs_title") }}</h2>
      <p class="section-desc">{{ $t("message.langs_desc") }}</p>
      <div class="language-list">
        <div class="language-item">
          <span class="lang-icon">🇯🇵</span>
          <span class="lang-name">{{ $t("message.language.ja") }}</span>
        </div>
        <div class="language-item">
          <span class="lang-icon">🇺🇸</span>
          <span class="lang-name">{{ $t("message.language.en") }}</span>
        </div>
        <div class="language-item">
          <span class="lang-icon">🇨🇳</span>
          <span class="lang-name">{{ $t("message.language.zh") }}</span>
        </div>
        <div class="language-item">
          <span class="lang-icon">🇦🇪</span>
          <span class="lang-name">{{ $t("message.language.ar") }}</span>
        </div>
        <div class="language-item">
          <span class="lang-icon">🇷🇺</span>
          <span class="lang-name">{{ $t("message.language.ru") }}</span>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <h2 class="section-title">{{ $t("message.contact_us") }}</h2>
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div class="contact-text">
            <h3>{{ $t("message.address_title") }}</h3>
            <p>{{ $t("message.address") }}</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📞</div>
          <div class="contact-text">
            <h3>{{ $t("message.phone_title") }}</h3>
            <p>{{ $t("message.phone") }}</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📧</div>
          <div class="contact-text">
            <h3>{{ $t("message.email_title") }}</h3>
            <p>{{ $t("message.email") }}</p>
          </div>
        </div>
      </div>
      <button class="btn primary">{{ $t("button.submit") }}</button>
    </section>
  </div>
</template>

<script setup>
// コンポーネントのロジック
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: #8c7569;
  font-weight: 300;
  letter-spacing: 2px;
  position: relative;
}

.page-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 1px;
  background-color: #d4b08c;
  margin: 15px auto 0;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #8c7569;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: "";
  display: block;
  width: 50px;
  height: 1px;
  background-color: #d4b08c;
  margin: 15px auto 0;
}

.section-desc {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #666;
  line-height: 1.8;
}

/* Clinic Section */
.clinic-section {
  display: flex;
  gap: 60px;
  margin-bottom: 80px;
  align-items: center;
}

.clinic-image {
  flex: 1;
  min-width: 0;
}

.placeholder-image {
  background-color: #f8f4f0;
  height: 400px;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
}

.placeholder-image::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 1px solid rgba(212, 176, 140, 0.3);
}

.clinic-info {
  flex: 1;
  min-width: 0;
}

.clinic-info h2 {
  font-size: 1.8rem;
  color: #8c7569;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.clinic-description {
  margin-bottom: 30px;
  line-height: 1.8;
  color: #555;
}

.clinic-values {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.value-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background-color: #f8f4f0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
}

.value-icon {
  font-size: 1.8rem;
  color: #d4b08c;
}

.value-text h3 {
  font-size: 1.3rem;
  color: #8c7569;
  margin-bottom: 10px;
  font-weight: 400;
}

.value-text p {
  color: #666;
  line-height: 1.6;
}

/* Treatments Section */
.treatments-section {
  margin-bottom: 80px;
}

.treatment-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.treatment-item {
  background-color: white;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
  border: 1px solid #f0ebe5;
  transition: transform 0.3s ease;
}

.treatment-item:hover {
  transform: translateY(-5px);
}

.treatment-item h3 {
  font-size: 1.3rem;
  color: #8c7569;
  margin-bottom: 15px;
  font-weight: 300;
  letter-spacing: 1px;
}

.treatment-item p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more {
  display: inline-block;
  color: #d4b08c;
  font-size: 0.9rem;
  position: relative;
  padding-bottom: 2px;
}

.read-more::after {
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

.read-more:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Team Section */
.team-section {
  margin-bottom: 80px;
}

.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.member-card {
  background-color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.member-card:hover {
  transform: translateY(-8px);
}

.member-photo {
  height: 300px;
  background-color: #f8f4f0;
  position: relative;
}

.member-photo::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.1));
}

.dr-tanaka {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><circle cx="50" cy="35" r="20" fill="%23d4b08c"/><path d="M30,85 Q50,60 70,85" stroke="%23d4b08c" stroke-width="2" fill="none"/></svg>');
  background-size: 100px 100px;
  background-position: center;
  background-repeat: no-repeat;
}

.dr-suzuki {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><circle cx="50" cy="35" r="20" fill="%23d4b08c"/><path d="M30,85 Q50,60 70,85" stroke="%23d4b08c" stroke-width="2" fill="none"/></svg>');
  background-size: 100px 100px;
  background-position: center;
  background-repeat: no-repeat;
}

.dr-kimura {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><circle cx="50" cy="35" r="20" fill="%23d4b08c"/><path d="M30,85 Q50,60 70,85" stroke="%23d4b08c" stroke-width="2" fill="none"/></svg>');
  background-size: 100px 100px;
  background-position: center;
  background-repeat: no-repeat;
}

.member-info {
  padding: 25px;
}

.member-info h3 {
  font-size: 1.4rem;
  color: #8c7569;
  margin-bottom: 5px;
  font-weight: 400;
}

.member-title {
  color: #d4b08c;
  font-size: 1rem;
  margin-bottom: 15px;
  font-weight: 300;
}

.member-bio {
  color: #666;
  line-height: 1.6;
}

/* International Section */
.international-section {
  background-color: #f8f4f0;
  padding: 60px 40px;
  margin-bottom: 80px;
  text-align: center;
}

.language-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
}

.language-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.lang-icon {
  font-size: 2.5rem;
}

.lang-name {
  color: #8c7569;
  font-weight: 300;
}

/* Contact Section */
.contact-section {
  text-align: center;
  margin-bottom: 80px;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
}

.contact-item {
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
  border: 1px solid #f0ebe5;
}

.contact-icon {
  font-size: 2rem;
  color: #d4b08c;
}

.contact-text h3 {
  font-size: 1.2rem;
  color: #8c7569;
  margin-bottom: 10px;
  font-weight: 400;
}

.contact-text p {
  color: #666;
  line-height: 1.5;
}

.btn {
  padding: 14px 36px;
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

@media (max-width: 768px) {
  .clinic-section {
    flex-direction: column;
  }

  .team-members {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .contact-info {
    flex-direction: column;
    align-items: center;
  }

  .contact-item {
    width: 100%;
  }

  .page-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.7rem;
  }
}
</style>
