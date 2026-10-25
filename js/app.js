/**
 * ISRAEL D. DIACOV - EXPERIÊNCIA IMERSIVA RETRÔ ANOS 60 FULLSCREEN
 * JavaScript Nativo (Vanilla JS) - Contornos Vetoriais, Efeitos Especiais & WhatsApp
 * Foco: Sites, Programas, Google Ads, SEO e Sistemas Médicos (ANS, CNES, CBHPM)
 */

(function () {
  'use strict';

  // Configuração Geral de Contato
  const CONTACT_INFO = {
    name: 'Israel D. Diacov',
    company: 'Israel D. Diacov - Soluções Digitais & Software',
    phoneFormatted: '(41) 99924-8171',
    phoneRaw: '5541999248171',
    email: 'israelddiacov@outlook.com.br',
    location: 'Curitiba - PR, Brasil',
    website: window.location.href
  };

  // Base de Dados dos Objetos Interativos da Sala
  const SCENE_OBJECTS = {
    radio: {
      badge: '<i class="fas fa-bolt"></i> Comunicação & Mensageria',
      title: 'Automação de Mensagens, E-mails & WhatsApp',
      body: '<p>Desenvolvimento de robôs inteligentes de atendimento, automação de mensagens transacionais e envio massivo de e-mails corporativos via SMTP/Outlook e integração oficial com a API do WhatsApp.</p>',
      highlights: [
        '<i class="fas fa-check-circle"></i> Integração oficial com a API do WhatsApp e Webhooks bidirecionais',
        '<i class="fas fa-check-circle"></i> Disparadores de e-mails em massa corporativos via SMTP e Outlook',
        '<i class="fas fa-check-circle"></i> Robôs de atendimento, triagem automática e avisos transacionais',
        '<i class="fas fa-check-circle"></i> Histórico de disparos, controle de fila e logs de entrega em tempo real'
      ],
      tags: ['WhatsApp API', 'SMTP / Outlook', 'Mensageria em Massa', 'Webhooks', 'Automação', 'Python'],
      ctaText: 'Solicitar Automação de Comunicação no WhatsApp',
      whatsappMsg: 'Olá Israel! Vi seu cartão interativo e gostaria de automatizar mensagens, e-mails ou WhatsApp para minha empresa.'
    },

    dev: {
      badge: '<i class="fas fa-laptop-code"></i> Criação & Alteração de Software',
      title: 'Criação e Reforma de Sites & Programas Sob Medida',
      body: '<p>Criação do zero de novos sites rápidos e modernos, landing pages de alta conversão, e reformulações visuais em sites existentes. Desenvolvimento de programas para Windows, Linux e Android com bancos de dados relacionais e APIs REST.</p>',
      highlights: [
        '<i class="fas fa-check-circle"></i> Criação de novos sites modernos, velozes e responsivos no celular',
        '<i class="fas fa-check-circle"></i> Reformas completas, ajustes de layout e correções de bugs em sites existentes',
        '<i class="fas fa-check-circle"></i> Softwares desktop e web sob medida (Windows, Linux e Android)',
        '<i class="fas fa-check-circle"></i> Bancos de dados relacionais robustos (PostgreSQL, Oracle e SQLite)',
        '<i class="fas fa-check-circle"></i> Deploys automatizados com Docker e servidores Linux Nginx'
      ],
      tags: ['Criação de Sites', 'Reforma de Sites', 'Python', 'PHP / Laravel', 'C# / .NET', 'Docker', 'PostgreSQL'],
      ctaText: 'Pedir Orçamento de Site / Programa no WhatsApp',
      whatsappMsg: 'Olá Israel! Gostaria de um orçamento para criar ou reformar um site ou programa sob medida.'
    },

    medical: {
      badge: '<i class="fas fa-heart-pulse"></i> HealthTech & Regulação',
      title: 'Sistemas em Saúde, Conformidade ANS & CNES',
      body: '<p>Plataformas corporativas completas para a área médica: regulação de leitos hospitalares e ambulâncias, portais de saúde suplementar em conformidade com as normas da <strong>ANS (Agência Nacional de Saúde Suplementar)</strong> e telemedicina em tempo real.</p>',
      highlights: [
        '<i class="fas fa-check-circle"></i> Conformidade rigorosa com normas e resoluções normativas da ANS',
        '<i class="fas fa-check-circle"></i> Padrão TISS (Troca de Informações) e TUSS (Terminologia Unificada da ANS)',
        '<i class="fas fa-check-circle"></i> Integração oficial via webservices com o CNES (Ministério da Saúde)',
        '<i class="fas fa-check-circle"></i> Faturamento médico com tabelas oficiais CBHPM, TUSS, SIMPRO e Brasíndice',
        '<i class="fas fa-check-circle"></i> Leitura inteligente e auditoria de guias médicas com tecnologia OCR',
        '<i class="fas fa-check-circle"></i> Telemedicina segura por vídeo em tempo real com protocolo WebRTC'
      ],
      tags: ['Padrão TISS / TUSS', 'Regulação ANS', 'Integração CNES', 'Tabela CBHPM', 'OCR de Guias', 'WebRTC Vídeo'],
      ctaText: 'Conversar sobre Soluções para a Saúde no WhatsApp',
      whatsappMsg: 'Olá Israel! Gostaria de conversar sobre desenvolvimento de sistemas para a área médica (ANS, CNES, CBHPM ou Telemedicina).'
    },

    tv: {
      badge: '<i class="fas fa-bullseye"></i> Tráfego Pago & Posicionamento',
      title: 'Google Ads & Otimização SEO',
      body: '<p>Coloque sua empresa no topo das pesquisas do Google. Gestão estratégica de anúncios patrocinados no Google Ads para atrair clientes prontos para comprar, somada a otimização técnica de SEO para ranqueamento orgânico.</p>',
      highlights: [
        '<i class="fas fa-check-circle"></i> Campanhas de Google Ads focadas em contatos diários no seu WhatsApp',
        '<i class="fas fa-check-circle"></i> Redução de custo por clique (CPC) e foco em leads qualificados',
        '<i class="fas fa-check-circle"></i> Otimização de SEO técnico para colocar o site no topo sem pagar por anúncio',
        '<i class="fas fa-check-circle"></i> Aceleração máxima de velocidade e pontuação no Google Core Web Vitals',
        '<i class="fas fa-check-circle"></i> Certificação de segurança HTTPS e indexação correta no Google Search Console'
      ],
      tags: ['Google Ads', 'SEO no Topo', 'Core Web Vitals', 'Tráfego Pago', 'Conversão no WhatsApp', 'Search Console'],
      ctaText: 'Colocar Minha Empresa no Google via WhatsApp',
      whatsappMsg: 'Olá Israel! Gostaria de colocar minha empresa no topo do Google com campanhas de Google Ads e SEO.'
    }
  };

  // Coordenadas Calibradas na Imagem Base 1376x768
  const CALIBRATION = {
    antennaX: 155,
    antennaY: 330,
    ecgX: 850,
    ecgY: 362,
    lampX: 525,
    lampY: 350,
    tvX: 1190,
    tvY: 415
  };

  // Variáveis de Estado
  let activeObjectKey = null;
  let canvas, ctx;
  let particles = [];
  let sparks = [];
  let ecgStep = 0;

  // Inicialização no DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCanvasEffects();
    initSvgEvents();
    initForms();
    initKeyboardShortcuts();
    initServiceWorker();
  });

  /* ==========================================================================
     1. TEMA NOTURNO / DIURNO
     ========================================================================== */
  function initTheme() {
    const themeBtn = document.getElementById('themeToggle');
    const storedTheme = localStorage.getItem('diacov_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', storedTheme);
    updateThemeIcon(storedTheme);

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('diacov_theme', nextTheme);
        updateThemeIcon(nextTheme);
        showToast(`Tema Retrô ${nextTheme === 'dark' ? 'Noturno' : 'Diurno'} ativado`, 'info');
      });
    }
  }

  function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (!icon) return;
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  /* ==========================================================================
     2. CONVERSÃO MATRICIAL: COORDENADAS SVG (1376x768) PARA TELA EM PIXELS
     ========================================================================== */
  function svgToScreen(x, y) {
    const svg = document.getElementById('sceneSvg');
    if (!svg || !svg.createSVGPoint || !svg.getScreenCTM) {
      return { x: (x / 1376) * window.innerWidth, y: (y / 768) * window.innerHeight };
    }
    const pt = svg.createSVGPoint();
    pt.x = x;
    pt.y = y;
    const ctm = svg.getScreenCTM();
    return pt.matrixTransform(ctm);
  }

  /* ==========================================================================
     3. EFEITOS ESPECIAIS NO CANVAS FULLSCREEN (POEIRA, RAIOS, ECG, BRILHO)
     ========================================================================== */
  function initCanvasEffects() {
    canvas = document.getElementById('sceneCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 35 partículas de poeira dourada flutuando com a luz cinematográfica
    particles = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.4 - 0.1,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    startAnimationLoop();
  }

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function startAnimationLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Partículas douradas
    for (let p of particles) {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y < 0) p.y = canvas.height;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(244, 162, 97, ${p.alpha})`;
      ctx.fill();
    }

    // 2. Efeito do Rádio: Raios Elétricos e Faíscas Exatamente na Antena
    if (activeObjectKey === 'radio') {
      drawRadioLightning();
    }

    // 3. Efeito dos Aparelhos Médicos: ECG Neon Verde Exatamente na Tela do Monitor
    if (activeObjectKey === 'medical') {
      drawMedicalECG();
    }

    // 4. Efeito da TV: Brilho Analógico de Tubo (CRT)
    if (activeObjectKey === 'tv') {
      drawTvGlow();
    }

    // 5. Efeito da Estação Dev: Pulso e Brilho da Lâmpada sobre a Máquina de Escrever
    if (activeObjectKey === 'dev') {
      drawDevMatrixGlow();
    }

    requestAnimationFrame(startAnimationLoop);
  }

  // Raios e faíscas dinâmicas a partir da ponta da antena do rádio
  function drawRadioLightning() {
    const p = svgToScreen(CALIBRATION.antennaX, CALIBRATION.antennaY);
    const startX = p.x;
    const startY = p.y;

    // Faíscas
    if (Math.random() < 0.45) {
      for (let i = 0; i < 3; i++) {
        sparks.push({
          x: startX,
          y: startY,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.7) * 8,
          life: 22,
          color: Math.random() > 0.4 ? '#ffea79' : '#00f0ff'
        });
      }
    }

    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.life--;

      ctx.beginPath();
      ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = s.color;
      ctx.fill();
      ctx.shadowBlur = 0;

      if (s.life <= 0) sparks.splice(i, 1);
    }

    // Arcos elétricos ramificados a partir da ponta da antena
    if (Math.random() < 0.7) {
      const rayCount = Math.floor(Math.random() * 3) + 2;
      for (let r = 0; r < rayCount; r++) {
        let curX = startX;
        let curY = startY;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.6;
        const length = 50 + Math.random() * 75;
        const steps = 7;

        ctx.beginPath();
        ctx.moveTo(curX, curY);

        for (let s = 0; s < steps; s++) {
          const segLen = length / steps;
          curX += Math.cos(angle) * segLen + (Math.random() - 0.5) * 16;
          curY += Math.sin(angle) * segLen + (Math.random() - 0.5) * 16;
          ctx.lineTo(curX, curY);
        }

        ctx.strokeStyle = Math.random() > 0.4 ? '#ffea79' : '#00e5ff';
        ctx.lineWidth = Math.random() * 2.5 + 1;
        ctx.shadowBlur = 14;
        ctx.shadowColor = '#fcd34d';
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }
  }

  // Linha de ECG verde neon exatamente na tela do monitor médico
  function drawMedicalECG() {
    const center = svgToScreen(CALIBRATION.ecgX, CALIBRATION.ecgY);
    const pRight = svgToScreen(CALIBRATION.ecgX + 35, CALIBRATION.ecgY);
    const screenWidth = Math.max(50, Math.abs(pRight.x - center.x) * 2);

    const startX = center.x - screenWidth / 2;
    const baseY = center.y;

    ecgStep = (ecgStep + 2) % screenWidth;

    ctx.beginPath();
    ctx.moveTo(startX, baseY);

    for (let x = 0; x < screenWidth; x += 2.5) {
      let yOffset = 0;
      const progress = (x - ecgStep + screenWidth) % screenWidth;

      if (progress > screenWidth * 0.35 && progress < screenWidth * 0.42) yOffset = -5;
      else if (progress >= screenWidth * 0.42 && progress < screenWidth * 0.48) yOffset = 7;
      else if (progress >= screenWidth * 0.48 && progress < screenWidth * 0.58) yOffset = -22;
      else if (progress >= screenWidth * 0.58 && progress < screenWidth * 0.65) yOffset = 12;
      else if (progress >= screenWidth * 0.70 && progress < screenWidth * 0.82) yOffset = -8;

      ctx.lineTo(startX + x, baseY + yOffset);
    }

    ctx.strokeStyle = '#39ff14';
    ctx.lineWidth = 2.2;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#39ff14';
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  // Brilho analógico da TV
  function drawTvGlow() {
    const center = svgToScreen(CALIBRATION.tvX, CALIBRATION.tvY);
    const rad = Math.max(25, 70 + Math.sin(Date.now() / 150) * 8);

    const grad = ctx.createRadialGradient(center.x, center.y, 10, center.x, center.y, rad);
    grad.addColorStop(0, 'rgba(244, 162, 97, 0.45)');
    grad.addColorStop(1, 'transparent');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(center.x, center.y, rad, 0, Math.PI * 2);
    ctx.fill();
  }

  // Brilho da lâmpada sobre a máquina de escrever
  function drawDevMatrixGlow() {
    const center = svgToScreen(CALIBRATION.lampX, CALIBRATION.lampY);
    const rad = Math.max(25, 65 + Math.cos(Date.now() / 180) * 6);

    const grad = ctx.createRadialGradient(center.x, center.y, 8, center.x, center.y, rad);
    grad.addColorStop(0, 'rgba(0, 240, 255, 0.38)');
    grad.addColorStop(1, 'transparent');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(center.x, center.y, rad, 0, Math.PI * 2);
    ctx.fill();
  }

  /* ==========================================================================
     4. EVENTOS DOS CONTORNOS VETORIAIS
     ========================================================================== */
  function initSvgEvents() {
    const groups = document.querySelectorAll('.object-group');

    groups.forEach(g => {
      g.addEventListener('mouseenter', () => {
        const key = g.getAttribute('data-key');
        activeObjectKey = key;
        updateNavPills(key);
      });

      g.addEventListener('mouseleave', () => {
        const modal = document.getElementById('objectModalBackdrop');
        if (!modal || !modal.classList.contains('active')) {
          activeObjectKey = null;
          updateNavPills(null);
        }
      });
    });
  }

  /* ==========================================================================
     5. MODAL CENTRALIZADO PERFEITAMENTE NO ESQUADRO
     ========================================================================== */
  window.selectObject = function (key) {
    activeObjectKey = key;
    const data = SCENE_OBJECTS[key];
    if (!data) return;

    // 1. Atualiza contornos e pílulas
    document.querySelectorAll('.object-group').forEach(g => {
      g.classList.toggle('active', g.getAttribute('data-key') === key);
    });
    updateNavPills(key);

    // 2. Preenche os campos do Modal Centralizado
    const badgeElem = document.getElementById('modalBadge');
    if (badgeElem) badgeElem.innerHTML = data.badge;

    const titleElem = document.getElementById('modalTitle');
    if (titleElem) titleElem.textContent = data.title;

    const bodyElem = document.getElementById('modalBody');
    if (bodyElem) bodyElem.innerHTML = data.body;

    const highlightsElem = document.getElementById('modalHighlights');
    if (highlightsElem) {
      highlightsElem.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');
    }

    const tagsElem = document.getElementById('modalTags');
    if (tagsElem) {
      tagsElem.innerHTML = data.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
    }

    const ctaBtn = document.getElementById('modalCta');
    if (ctaBtn) {
      ctaBtn.innerHTML = `<i class="fab fa-whatsapp"></i> ${data.ctaText}`;
      const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(data.whatsappMsg)}`;
      ctaBtn.href = whatsappUrl;
    }

    // 3. Abre o Modal Centralizado com animação suave
    const modal = document.getElementById('objectModalBackdrop');
    if (modal) {
      modal.classList.add('active');
    }
  };

  function updateNavPills(key) {
    document.querySelectorAll('.nav-pill-btn').forEach(btn => {
      btn.classList.toggle('active', key ? btn.getAttribute('onclick')?.includes(key) : false);
    });
  }

  window.closeObjectModal = function () {
    const modal = document.getElementById('objectModalBackdrop');
    if (modal) modal.classList.remove('active');
    activeObjectKey = null;
    document.querySelectorAll('.object-group').forEach(g => g.classList.remove('active'));
    updateNavPills(null);
  };

  window.handleBackdropClick = function (e) {
    if (e.target && e.target.id === 'objectModalBackdrop') {
      closeObjectModal();
    }
  };

  /* ==========================================================================
     6. CALIBRADOR VISUAL INTERATIVO (AJUSTE FINO)
     ========================================================================== */
  window.toggleCalibrator = function () {
    const panel = document.getElementById('calibratorPanel');
    if (!panel) return;
    panel.classList.toggle('active');
  };

  window.updateCalibrator = function () {
    const antY = parseInt(document.getElementById('sliderAntennaY').value, 10);
    const ecgY = parseInt(document.getElementById('sliderEcgY').value, 10);
    const lampX = parseInt(document.getElementById('sliderLampX').value, 10);
    const lampY = parseInt(document.getElementById('sliderLampY').value, 10);

    CALIBRATION.antennaY = antY;
    CALIBRATION.ecgY = ecgY;
    CALIBRATION.lampX = lampX;
    CALIBRATION.lampY = lampY;

    document.getElementById('valAntennaY').textContent = antY;
    document.getElementById('valEcgY').textContent = ecgY;
    document.getElementById('valLampX').textContent = lampX;
    document.getElementById('valLampY').textContent = lampY;
  };

  window.copyCalibratorValues = function () {
    const txt = JSON.stringify(CALIBRATION, null, 2);
    navigator.clipboard.writeText(txt).then(() => {
      showToast('Coordenadas copiadas para a área de transferência!', 'success');
    });
  };

  window.resetCalibratorValues = function () {
    CALIBRATION.antennaY = 330;
    CALIBRATION.ecgY = 362;
    CALIBRATION.lampX = 525;
    CALIBRATION.lampY = 350;

    document.getElementById('sliderAntennaY').value = 330;
    document.getElementById('sliderEcgY').value = 362;
    document.getElementById('sliderLampX').value = 525;
    document.getElementById('sliderLampY').value = 350;

    window.updateCalibrator();
    showToast('Valores restaurados ao padrão.', 'info');
  };

  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeObjectModal();
        closePortfolioModal();
        closeMiniModal('qrModal');
        closeMiniModal('leadsModal');
        const cal = document.getElementById('calibratorPanel');
        if (cal) cal.classList.remove('active');
      }
      // Atalho secreto Ctrl + Alt + A para calibrador
      if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
        toggleCalibrator();
      }
    });
  }

  /* ==========================================================================
     7. MODAL DE SERVIÇOS & PORTFÓLIO
     ========================================================================== */
  window.openPortfolioModal = function () {
    const modal = document.getElementById('portfolioModal');
    if (modal) modal.classList.add('active');
  };

  window.closePortfolioModal = function () {
    const modal = document.getElementById('portfolioModal');
    if (modal) modal.classList.remove('active');
  };

  /* ==========================================================================
     8. FORMULÁRIOS & WHATSAPP
     ========================================================================== */
  function initForms() {
    const form = document.getElementById('portfolioContactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('modalName').value.trim();
      const phone = document.getElementById('modalPhone').value.trim();
      const service = document.getElementById('modalService').value;
      const message = document.getElementById('modalMessage').value.trim();

      if (!name || !phone) {
        showToast('Por favor, informe seu nome e WhatsApp.', 'warn');
        return;
      }

      saveLeadLocally({ name, phone, service, message, date: new Date().toLocaleString('pt-BR') });

      const whatsappMsg = [
        `*Olá Israel! Solicitação de Orçamento pelo Cartão Digital*`,
        `*Nome / Empresa:* ${name}`,
        `*WhatsApp:* ${phone}`,
        `*Área de Interesse:* ${service}`,
        message ? `*Mensagem:* ${message}` : ''
      ].filter(Boolean).join('\n\n');

      const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(whatsappMsg)}`;

      showToast('Abrindo WhatsApp para finalizar o contato...', 'success');
      form.reset();

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 500);
    });
  }

  function saveLeadLocally(lead) {
    try {
      const leads = JSON.parse(localStorage.getItem('diacov_leads') || '[]');
      leads.unshift(lead);
      localStorage.setItem('diacov_leads', JSON.stringify(leads));
    } catch (err) {
      console.warn('Erro ao salvar lead local', err);
    }
  }

  /* ==========================================================================
     9. vCARD, QR CODE E UTILITÁRIOS
     ========================================================================== */
  window.downloadVCard = function () {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${CONTACT_INFO.name}`,
      `N:Diacov;Israel;;;`,
      `ORG:${CONTACT_INFO.company}`,
      `TITLE:Criação de Sites, Programas, Google Ads & SEO`,
      `TEL;TYPE=CELL,VOICE,PREF:+${CONTACT_INFO.phoneRaw}`,
      `EMAIL;TYPE=INTERNET,WORK,PREF:${CONTACT_INFO.email}`,
      `ADR;TYPE=WORK:;;Curitiba;PR;;Brasil`,
      `URL:${CONTACT_INFO.website}`,
      'NOTE:Criação e Manutenção de Sites, Programas Sob Medida, Google Ads, SEO e Sistemas Médicos (ANS/CNES).',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Israel_Diacov.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('Contato pronto para salvar na sua agenda!', 'success');
  };

  window.shareCard = async function () {
    const shareData = {
      title: `${CONTACT_INFO.name} - Sites, Softwares, Google Ads & SEO`,
      text: `Conecte-se com Israel Diacov - Criação e reforma de sites, softwares sob medida, Google Ads e sistemas em conformidade com a ANS/CNES:`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast('Cartão compartilhado com sucesso!', 'success');
      } catch (err) {
        if (err.name !== 'AbortError') copyCardLink();
      }
    } else {
      copyCardLink();
    }
  };

  window.copyCardLink = function () {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('Link do cartão copiado para a área de transferência!', 'success');
    }).catch(() => {
      showToast('Não foi possível copiar o link.', 'info');
    });
  };

  window.copyText = function (text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label || 'Texto'} copiado com sucesso!`, 'success');
    });
  };

  // Modais de QR Code e Leads
  window.openQRCodeModal = function () {
    const modal = document.getElementById('qrModal');
    if (!modal) return;
    modal.classList.add('active');
    renderQRCode(window.location.href);
  };

  window.closeMiniModal = function (id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
  };

  function renderQRCode(text) {
    const canvas = document.getElementById('qrCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 180;
    canvas.width = size;
    canvas.height = size;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => ctx.drawImage(img, 10, 10, size - 20, size - 20);
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(text)}&color=140d0a`;
  }

  window.openLeadsModal = function () {
    const modal = document.getElementById('leadsModal');
    if (!modal) return;
    modal.classList.add('active');
    renderLeadsTable();
  };

  function renderLeadsTable() {
    const container = document.getElementById('leadsTableContainer');
    if (!container) return;

    const leads = JSON.parse(localStorage.getItem('diacov_leads') || '[]');
    if (leads.length === 0) {
      container.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; padding: 12px 0;">Nenhuma solicitação gravada ainda.</p>';
      return;
    }

    let html = `
      <div style="max-height: 250px; overflow-y: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; text-align: left;">
          <thead>
            <tr style="border-bottom: 1px solid var(--hud-border); color: var(--warm-mustard-bright);">
              <th style="padding: 6px;">Data</th>
              <th style="padding: 6px;">Nome</th>
              <th style="padding: 6px;">WhatsApp</th>
              <th style="padding: 6px;">Interesse</th>
            </tr>
          </thead>
          <tbody>
    `;

    leads.forEach(l => {
      html += `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 6px; color: var(--text-subtle);">${l.date || '-'}</td>
          <td style="padding: 6px; font-weight: 700;">${l.name}</td>
          <td style="padding: 6px;">${l.phone}</td>
          <td style="padding: 6px; color: var(--warm-orange);">${l.service}</td>
        </tr>
      `;
    });

    html += '</tbody></table></div>';
    container.innerHTML = html;
  }

  window.clearAllLeads = function () {
    if (confirm('Deseja limpar todos os registros de contatos salvos no navegador?')) {
      localStorage.removeItem('diacov_leads');
      renderLeadsTable();
      showToast('Registros de contatos limpos.', 'info');
    }
  };

  window.exportLeadsCSV = function () {
    const leads = JSON.parse(localStorage.getItem('diacov_leads') || '[]');
    if (leads.length === 0) {
      showToast('Não há registros para exportar.', 'info');
      return;
    }

    let csv = 'Data;Nome;Telefone;Servico;Mensagem\n';
    leads.forEach(l => {
      csv += `"${l.date || ''}";"${l.name}";"${l.phone}";"${l.service}";"${(l.message || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contatos_diacov.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  /* ==========================================================================
     10. TOAST NOTIFICATIONS
     ========================================================================= */
  function showToast(msg, type = 'info') {
    const shelf = document.getElementById('toastShelf');
    if (!shelf) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';

    let icon = 'fas fa-info-circle';
    if (type === 'success') icon = 'fas fa-check-circle';
    if (type === 'warn') icon = 'fas fa-exclamation-triangle';

    toast.innerHTML = `<i class="${icon}" style="color: var(--warm-mustard-bright);"></i> <span>${msg}</span>`;
    shelf.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  /* ==========================================================================
     11. SERVICE WORKER PWA
     ========================================================================== */
  function initServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.warn('ServiceWorker skipped:', err);
      });
    }
  }

})();
