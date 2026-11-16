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
      liveDemo: `
        <div class="demo-header-bar">
          <span><i class="fas fa-satellite-dish"></i> Pipeline de Mensageria ao Vivo</span>
          <span class="demo-status-pill"><i class="fas fa-circle" style="font-size:6px;"></i> API ONLINE</span>
        </div>
        <div>POST /webhook/whatsapp &rarr; <strong>200 OK</strong> &bull; Fila SMTP: 0 atrasos &bull; Entrega: 99.8%</div>
      `,
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
      liveDemo: `
        <div class="demo-header-bar">
          <span><i class="fas fa-terminal"></i> Stack Full-Stack & Performance</span>
          <span class="demo-status-pill"><i class="fas fa-bolt" style="font-size:9px;"></i> LIGHTHOUSE 99/100</span>
        </div>
        <div>&lt;/&gt; Responsivo Mobile + Desktop &bull; Docker Container: Healthy &bull; Postgres SSL</div>
      `,
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
      liveDemo: `
        <div class="demo-header-bar">
          <span><i class="fas fa-heart-pulse"></i> Telemetria Regulatória HealthTech</span>
          <span class="demo-status-pill"><i class="fas fa-shield-check" style="font-size:9px;"></i> ANS TISS 4.01</span>
        </div>
        <div>CNES Webservice: <strong>Sincronizado</strong> &bull; Tabelas: CBHPM / TUSS / SIMPRO &bull; OCR Ativo</div>
      `,
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
      liveDemo: `
        <div class="demo-header-bar">
          <span><i class="fas fa-chart-line"></i> Crescimento de Tráfego & Conversão</span>
          <span class="demo-status-pill"><i class="fas fa-trophy" style="font-size:9px;"></i> TOPO GOOGLE #1</span>
        </div>
        <div class="demo-bars">
          <div class="demo-bar" style="height: 30%;"></div>
          <div class="demo-bar" style="height: 45%;"></div>
          <div class="demo-bar" style="height: 62%;"></div>
          <div class="demo-bar" style="height: 78%;"></div>
          <div class="demo-bar" style="height: 100%;"></div>
        </div>
      `,
      ctaText: 'Colocar Minha Empresa no Google via WhatsApp',
      whatsappMsg: 'Olá Israel! Gostaria de colocar minha empresa no topo do Google com campanhas de Google Ads e SEO.'
    }
  };

  // Configuração Padrão das Coordenadas (Base 1376x768)
  // Incorpora valores afinados pelo usuário e os 4 cantos livres para cada moldura
  const DEFAULT_CALIBRATION = {
    radio: {
      name: 'Rádio Retrô (Mensageria)',
      effectName: 'Antena do Rádio',
      effect: { x: 155, y: 326 },
      corners: {
        tl: { x: 120, y: 365 },
        tr: { x: 225, y: 365 },
        br: { x: 225, y: 465 },
        bl: { x: 120, y: 465 }
      }
    },
    dev: {
      name: 'Mesa / Estação Dev',
      effectName: 'Lâmpada da Mesa',
      effect: { x: 550, y: 350 },
      corners: {
        tl: { x: 460, y: 430 },
        tr: { x: 595, y: 430 },
        br: { x: 595, y: 515 },
        bl: { x: 460, y: 515 }
      }
    },
    medical: {
      name: 'Monitor Médico (Saúde)',
      effectName: 'Tela do ECG',
      effect: { x: 850, y: 362 },
      corners: {
        tl: { x: 815, y: 335 },
        tr: { x: 905, y: 335 },
        br: { x: 905, y: 425 },
        bl: { x: 815, y: 425 }
      }
    },
    tv: {
      name: 'TV Retrô (Google Ads / SEO)',
      effectName: 'Centro da Tela CRT',
      effect: { x: 1190, y: 415 },
      corners: {
        tl: { x: 1115, y: 340 },
        tr: { x: 1265, y: 340 },
        br: { x: 1265, y: 490 },
        bl: { x: 1115, y: 490 }
      }
    }
  };

  // Carrega configurações customizadas salvas no navegador ou padrões
  let CALIBRATION = loadSavedCalibration();
  let activeCalibratorTab = 'radio';
  let isDraggingHandle = false;
  let activeDragHandleKey = null;

  function loadSavedCalibration() {
    try {
      const saved = localStorage.getItem('diacov_calibration_v4');
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = JSON.parse(JSON.stringify(DEFAULT_CALIBRATION));
        for (const k of ['radio', 'dev', 'medical', 'tv']) {
          if (parsed[k]) {
            if (parsed[k].effect) {
              merged[k].effect.x = Number(parsed[k].effect.x) ?? merged[k].effect.x;
              merged[k].effect.y = Number(parsed[k].effect.y) ?? merged[k].effect.y;
            }
            if (parsed[k].corners) {
              for (const c of ['tl', 'tr', 'br', 'bl']) {
                if (parsed[k].corners[c]) {
                  merged[k].corners[c].x = Number(parsed[k].corners[c].x) ?? merged[k].corners[c].x;
                  merged[k].corners[c].y = Number(parsed[k].corners[c].y) ?? merged[k].corners[c].y;
                }
              }
            }
          }
        }
        return merged;
      }
    } catch (e) {
      console.warn('Erro ao carregar calibração salva', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_CALIBRATION));
  }

  function saveCalibrationToStorage() {
    try {
      localStorage.setItem('diacov_calibration_v4', JSON.stringify(CALIBRATION));
    } catch (e) {
      console.warn('Erro ao salvar calibração no cache', e);
    }
  }

  // Variáveis de Estado
  let activeObjectKey = null;
  let canvas, ctx;
  let particles = [];
  let sparks = [];
  let radioWaves = [];
  let floatingTokens = [];
  let ecgStep = 0;
  let effectsPaused = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
  let autoTourTimer = null;
  let autoTourIndex = 0;
  const TOUR_SEQUENCE = ['radio', 'dev', 'medical', 'tv'];

  // Inicialização no DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEffectsControls();
    initParallaxAndSpotlight();
    initCanvasEffects();
    initSvgEvents();
    applyCalibration();
    initCalibratorInteractions();
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
     2. CONVERSÃO MATRICIAL: COORDENADAS SVG (1376x768) PARA TELA EM PIXELS E VICE-VERSA
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

  function screenToSvg(screenX, screenY) {
    const svg = document.getElementById('sceneSvg');
    if (!svg || !svg.createSVGPoint || !svg.getScreenCTM) {
      return { x: (screenX / window.innerWidth) * 1376, y: (screenY / window.innerHeight) * 768 };
    }
    const pt = svg.createSVGPoint();
    pt.x = screenX;
    pt.y = screenY;
    const ctm = svg.getScreenCTM().inverse();
    return pt.matrixTransform(ctm);
  }

  /* ==========================================================================
     2B. CONTROLES DE EFEITOS (PAUSA WCAG 2.2.2), PARALLAX 3D & TOUR GUIADO
     ========================================================================== */
  function initEffectsControls() {
    updateEffectsButtonUI();
  }

  function updateEffectsButtonUI() {
    document.body.classList.toggle('effects-paused', effectsPaused);
    const btn = document.getElementById('effectsToggleBtn');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (effectsPaused) {
      if (icon) icon.className = 'fas fa-play';
      btn.title = 'Retomar Efeitos Visuais';
      btn.setAttribute('aria-label', 'Retomar Efeitos');
    } else {
      if (icon) icon.className = 'fas fa-pause';
      btn.title = 'Pausar Efeitos Visuais';
      btn.setAttribute('aria-label', 'Pausar Efeitos');
    }
  }

  window.toggleEffectsPause = function () {
    effectsPaused = !effectsPaused;
    if (effectsPaused && autoTourTimer) {
      stopAutoTour();
    }
    updateEffectsButtonUI();
    showToast(effectsPaused ? 'Efeitos visuais pausados' : 'Efeitos visuais ativados', 'info');
  };

  window.toggleAutoTour = function () {
    if (autoTourTimer) {
      stopAutoTour();
      showToast('Tour automático encerrado', 'info');
      return;
    }

    if (effectsPaused) {
      effectsPaused = false;
      updateEffectsButtonUI();
    }

    const tourBtn = document.getElementById('tourBtn');
    if (tourBtn) tourBtn.classList.add('active');

    autoTourIndex = 0;
    highlightTourStep();
    autoTourTimer = setInterval(() => {
      autoTourIndex = (autoTourIndex + 1) % TOUR_SEQUENCE.length;
      highlightTourStep();
    }, 3600);

    showToast('Tour pelos efeitos iniciado! Passe o mouse ou clique em qualquer objeto.', 'success');
  };

  function highlightTourStep() {
    const key = TOUR_SEQUENCE[autoTourIndex];
    activeObjectKey = key;
    document.querySelectorAll('.object-group').forEach(g => {
      g.classList.toggle('active', g.getAttribute('data-key') === key);
    });
    updateNavPills(key);
  }

  function stopAutoTour() {
    if (autoTourTimer) {
      clearInterval(autoTourTimer);
      autoTourTimer = null;
    }
    const tourBtn = document.getElementById('tourBtn');
    if (tourBtn) tourBtn.classList.remove('active');

    const modal = document.getElementById('objectModalBackdrop');
    if (!modal || !modal.classList.contains('active')) {
      activeObjectKey = null;
      document.querySelectorAll('.object-group').forEach(g => g.classList.remove('active'));
      updateNavPills(null);
    }
  }

  function initParallaxAndSpotlight() {
    const stage = document.getElementById('parallaxStage');
    const spotlight = document.getElementById('cursorSpotlight');
    if (!stage && !spotlight) return;

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    window.addEventListener('pointermove', (e) => {
      if (effectsPaused) return;
      const nx = (e.clientX / window.innerWidth) - 0.5;
      const ny = (e.clientY / window.innerHeight) - 0.5;
      targetX = -nx * 18;
      targetY = -ny * 12;

      if (spotlight) {
        spotlight.style.setProperty('--mx', `${e.clientX}px`);
        spotlight.style.setProperty('--my', `${e.clientY}px`);
        spotlight.classList.add('visible');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      if (spotlight) spotlight.classList.remove('visible');
      targetX = 0;
      targetY = 0;
    });

    function tickParallax() {
      if (!effectsPaused && stage) {
        curX += (targetX - curX) * 0.08;
        curY += (targetY - curY) * 0.08;
        stage.style.setProperty('--px', `${curX.toFixed(2)}px`);
        stage.style.setProperty('--py', `${curY.toFixed(2)}px`);
      }
      requestAnimationFrame(tickParallax);
    }
    requestAnimationFrame(tickParallax);
  }

  /* ==========================================================================
     3. EFEITOS ESPECIAIS NO CANVAS FULLSCREEN (POEIRA, RAIOS, ECG, CÓDIGO, CRT)
     ========================================================================== */
  function initCanvasEffects() {
    canvas = document.getElementById('sceneCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    resizeCanvas();
    window.addEventListener('resize', () => {
      resizeCanvas();
      applyCalibration();
    });

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

    if (effectsPaused) {
      requestAnimationFrame(startAnimationLoop);
      return;
    }

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

    // 1B. Sinais discretos de interatividade quando em repouso
    if (!activeObjectKey) {
      drawIdleBeacons();
    }

    // 2. Efeito do Rádio: Raios Elétricos, Ondas de Frequência & Mensagens
    if (activeObjectKey === 'radio') {
      drawRadioLightning();
    }

    // 3. Efeito dos Aparelhos Médicos: Grade Osciloscópio, ECG Neon & Telemetria ANS/CNES
    if (activeObjectKey === 'medical') {
      drawMedicalECG();
    }

    // 4. Efeito da TV: Varredura CRT, Gráfico Google Ads/SEO & Selo #1
    if (activeObjectKey === 'tv') {
      drawTvGlow();
    }

    // 5. Efeito da Estação Dev: Cone de Luz Volumétrico & Tokens de Código
    if (activeObjectKey === 'dev') {
      drawDevMatrixGlow();
    }

    requestAnimationFrame(startAnimationLoop);
  }

  // Pequenos anéis pulsantes sutis indicando os 4 pontos interativos da sala
  function drawIdleBeacons() {
    const t = Date.now() / 1200;
    const pulse = (t % 1);
    const radius = 5 + pulse * 14;
    const alpha = (1 - pulse) * 0.45;

    const points = [
      { pos: CALIBRATION.radio.effect, color: '255, 218, 106' },
      { pos: CALIBRATION.dev.effect, color: '0, 240, 255' },
      { pos: CALIBRATION.medical.effect, color: '57, 255, 20' },
      { pos: CALIBRATION.tv.effect, color: '244, 162, 97' }
    ];

    for (const item of points) {
      const p = svgToScreen(item.pos.x, item.pos.y);
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${item.color}, ${alpha})`;
      ctx.lineWidth = 1.6;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${item.color}, 0.75)`;
      ctx.fill();
    }
  }

  // Raios, ondas de rádio concêntricas e pacotes de mensagens na antena
  function drawRadioLightning() {
    const p = svgToScreen(CALIBRATION.radio.effect.x, CALIBRATION.radio.effect.y);
    const startX = p.x;
    const startY = p.y;

    // Ondas concêntricas de transmissão
    if (Math.random() < 0.08) {
      radioWaves.push({ x: startX, y: startY, r: 6, alpha: 0.75 });
    }
    for (let i = radioWaves.length - 1; i >= 0; i--) {
      const w = radioWaves[i];
      w.r += 1.6;
      w.alpha -= 0.012;
      ctx.beginPath();
      ctx.arc(w.x, w.y, w.r, -Math.PI * 0.9, -Math.PI * 0.1);
      ctx.strokeStyle = `rgba(0, 240, 255, ${Math.max(0, w.alpha)})`;
      ctx.lineWidth = 1.8;
      ctx.stroke();
      if (w.alpha <= 0) radioWaves.splice(i, 1);
    }

    // Pacotes de comunicação flutuantes (WhatsApp / E-mail / API)
    if (Math.random() < 0.06) {
      const labels = ['API', '@', '✓✓', 'SMTP', 'ZAP'];
      floatingTokens.push({
        type: 'radio',
        text: labels[Math.floor(Math.random() * labels.length)],
        x: startX + (Math.random() - 0.5) * 40,
        y: startY - 12,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -1.1 - Math.random() * 0.6,
        life: 65,
        maxLife: 65,
        color: '#ffea79'
      });
    }
    drawFloatingTokens('radio');

    // Faíscas suaves
    if (Math.random() < 0.4) {
      for (let i = 0; i < 2; i++) {
        sparks.push({
          x: startX,
          y: startY,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.7) * 6,
          life: 20,
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
      ctx.shadowBlur = 8;
      ctx.shadowColor = s.color;
      ctx.fill();
      ctx.shadowBlur = 0;

      if (s.life <= 0) sparks.splice(i, 1);
    }

    // Arcos elétricos ramificados a partir da ponta da antena
    if (Math.random() < 0.55) {
      const rayCount = Math.floor(Math.random() * 2) + 2;
      for (let r = 0; r < rayCount; r++) {
        let curX = startX;
        let curY = startY;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.5;
        const length = 45 + Math.random() * 65;
        const steps = 6;

        ctx.beginPath();
        ctx.moveTo(curX, curY);

        for (let s = 0; s < steps; s++) {
          const segLen = length / steps;
          curX += Math.cos(angle) * segLen + (Math.random() - 0.5) * 14;
          curY += Math.sin(angle) * segLen + (Math.random() - 0.5) * 14;
          ctx.lineTo(curX, curY);
        }

        ctx.strokeStyle = Math.random() > 0.4 ? '#ffea79' : '#00e5ff';
        ctx.lineWidth = Math.random() * 2 + 1;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#fcd34d';
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }
  }

  // Osciloscópio com grade, linha de ECG verde neon e telemetria ANS/CNES
  function drawMedicalECG() {
    const center = svgToScreen(CALIBRATION.medical.effect.x, CALIBRATION.medical.effect.y);
    const pRight = svgToScreen(CALIBRATION.medical.effect.x + 35, CALIBRATION.medical.effect.y);
    const screenWidth = Math.max(54, Math.abs(pRight.x - center.x) * 2);

    const startX = center.x - screenWidth / 2;
    const baseY = center.y;

    // Grade sutil de osciloscópio
    ctx.save();
    ctx.strokeStyle = 'rgba(57, 255, 20, 0.18)';
    ctx.lineWidth = 0.8;
    for (let gx = startX; gx <= startX + screenWidth; gx += 12) {
      ctx.beginPath();
      ctx.moveTo(gx, baseY - 22);
      ctx.lineTo(gx, baseY + 20);
      ctx.stroke();
    }
    ctx.restore();

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

    // Badge flutuante de Telemetria HealthTech
    drawCanvasBadge(center.x, baseY - 46, '♥ 74 BPM • ANS TISS • CNES', '#39ff14');
  }

  // Brilho analógico da TV + Varredura CRT + Gráfico Google Ads & SEO #1
  function drawTvGlow() {
    const center = svgToScreen(CALIBRATION.tv.effect.x, CALIBRATION.tv.effect.y);
    const rad = Math.max(30, 74 + Math.sin(Date.now() / 220) * 6);

    const grad = ctx.createRadialGradient(center.x, center.y, 10, center.x, center.y, rad);
    grad.addColorStop(0, 'rgba(244, 162, 97, 0.42)');
    grad.addColorStop(1, 'transparent');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(center.x, center.y, rad, 0, Math.PI * 2);
    ctx.fill();

    // Barras crescentes de tráfego/SEO dentro da tela CRT
    const t = Date.now() / 400;
    const barHeights = [14, 22, 30, 42, 54];
    const barW = 8;
    const gap = 5;
    const totalW = barHeights.length * (barW + gap) - gap;
    const bx0 = center.x - totalW / 2;
    const by0 = center.y + 26;

    ctx.save();
    for (let i = 0; i < barHeights.length; i++) {
      const animH = barHeights[i] * (0.85 + 0.15 * Math.sin(t + i * 0.7));
      const bx = bx0 + i * (barW + gap);
      const barGrad = ctx.createLinearGradient(bx, by0 - animH, bx, by0);
      barGrad.addColorStop(0, '#ffc83b');
      barGrad.addColorStop(1, '#e76f51');
      ctx.fillStyle = barGrad;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(255, 200, 59, 0.6)';
      ctx.fillRect(bx, by0 - animH, barW, animH);
    }
    ctx.restore();

    drawCanvasBadge(center.x, center.y - 44, '★ GOOGLE #1 • ADS + SEO', '#ffc83b');
  }

  // Cone de luz da luminária + tokens de código subindo da Estação Dev
  function drawDevMatrixGlow() {
    const center = svgToScreen(CALIBRATION.dev.effect.x, CALIBRATION.dev.effect.y);
    const rad = Math.max(28, 68 + Math.cos(Date.now() / 240) * 5);

    // Cone volumétrico descendo da luminária
    const coneGrad = ctx.createLinearGradient(center.x, center.y, center.x, center.y + 110);
    coneGrad.addColorStop(0, 'rgba(0, 240, 255, 0.32)');
    coneGrad.addColorStop(1, 'transparent');

    ctx.save();
    ctx.fillStyle = coneGrad;
    ctx.beginPath();
    ctx.moveTo(center.x - 16, center.y);
    ctx.lineTo(center.x + 16, center.y);
    ctx.lineTo(center.x + 68, center.y + 110);
    ctx.lineTo(center.x - 68, center.y + 110);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    const grad = ctx.createRadialGradient(center.x, center.y, 8, center.x, center.y, rad);
    grad.addColorStop(0, 'rgba(0, 240, 255, 0.35)');
    grad.addColorStop(1, 'transparent');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(center.x, center.y, rad, 0, Math.PI * 2);
    ctx.fill();

    // Tokens flutuantes de código
    if (Math.random() < 0.08) {
      const codeSnippets = ['</>', '{ }', 'SQL', 'Docker', 'PHP', 'C#', 'API'];
      floatingTokens.push({
        type: 'dev',
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: center.x + (Math.random() - 0.5) * 55,
        y: center.y + 55,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -1.0 - Math.random() * 0.5,
        life: 70,
        maxLife: 70,
        color: '#00f0ff'
      });
    }
    drawFloatingTokens('dev');
  }

  function drawFloatingTokens(filterType) {
    ctx.save();
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    for (let i = floatingTokens.length - 1; i >= 0; i--) {
      const tk = floatingTokens[i];
      if (tk.type !== filterType) {
        tk.life -= 2;
        if (tk.life <= 0) floatingTokens.splice(i, 1);
        continue;
      }
      tk.x += tk.vx;
      tk.y += tk.vy;
      tk.life--;

      const alpha = Math.min(1, tk.life / 25);
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.fillStyle = tk.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = tk.color;
      ctx.fillText(tk.text, tk.x, tk.y);

      if (tk.life <= 0) floatingTokens.splice(i, 1);
    }
    ctx.restore();
  }

  function drawCanvasBadge(x, y, text, borderColor) {
    ctx.save();
    ctx.font = '700 10.5px "JetBrains Mono", monospace';
    const paddingX = 10;
    const w = ctx.measureText(text).width + paddingX * 2;
    const h = 22;
    const rx = x - w / 2;
    const ry = y - h / 2;

    ctx.fillStyle = 'rgba(18, 11, 7, 0.88)';
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.roundRect(rx, ry, w, h, 999);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fffaf5';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  /* ==========================================================================
     4. EVENTOS DOS CONTORNOS VETORIAIS
     ========================================================================== */
  function initSvgEvents() {
    const groups = document.querySelectorAll('.object-group');

    groups.forEach(g => {
      g.addEventListener('mouseenter', () => {
        if (autoTourTimer) stopAutoTour();
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
  let supportsDisplayTransition;
  function canTransitionDisplay() {
    if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
    if (!window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {
      return false;
    }
    const probe = document.createElement('div');
    probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
    document.body.appendChild(probe);
    getComputedStyle(probe).display;
    probe.style.display = 'none';
    supportsDisplayTransition = getComputedStyle(probe).display === 'block';
    probe.remove();
    return supportsDisplayTransition;
  }

  window.selectObject = function (key) {
    // Se o calibrador estiver ativo, o clique seleciona o objeto para calibração
    const calPanel = document.getElementById('calibratorPanel');
    if (calPanel && calPanel.classList.contains('active')) {
      setCalibratorObject(key);
      return;
    }

    if (autoTourTimer) stopAutoTour();

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

    const demoElem = document.getElementById('modalLiveDemo');
    if (demoElem) demoElem.innerHTML = data.liveDemo || '';

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

    // 3. Abre o Modal Centralizado com transição nativa @starting-style
    const modal = document.getElementById('objectModalBackdrop');
    if (modal) {
      modal.removeAttribute('data-closing');
      modal.classList.add('active');
    }
  };

  function updateNavPills(key) {
    document.querySelectorAll('.nav-pill-btn').forEach(btn => {
      if (btn.id === 'tourBtn') return;
      btn.classList.toggle('active', key ? btn.getAttribute('onclick')?.includes(key) : false);
    });
  }

  window.closeObjectModal = async function () {
    const modal = document.getElementById('objectModalBackdrop');
    if (modal && modal.classList.contains('active')) {
      if (canTransitionDisplay()) {
        modal.classList.remove('active');
      } else {
        modal.setAttribute('data-closing', '');
        const animations = modal.getAnimations({ subtree: true });
        if (animations.length > 0) {
          await Promise.race([
            Promise.allSettled(animations.map(a => a.finished)),
            new Promise(r => setTimeout(r, 350))
          ]);
        }
        if (modal.hasAttribute('data-closing')) {
          modal.removeAttribute('data-closing');
          modal.classList.remove('active');
        }
      }
    }
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
     6. CALIBRADOR VISUAL INTERATIVO (4 CANTOS LIVRES + PONTO DE EFEITO)
     ========================================================================== */
  function applyCalibration() {
    const mapping = {
      radio: { poly: 'contourRadio', label: 'labelRadio' },
      dev: { poly: 'contourDev', label: 'labelDev' },
      medical: { poly: 'contourMedical', label: 'labelMedical' },
      tv: { poly: 'contourTv', label: 'labelTv' }
    };

    for (const [key, ids] of Object.entries(mapping)) {
      const obj = CALIBRATION[key];
      if (!obj) continue;

      const poly = document.getElementById(ids.poly);
      if (poly) {
        const c = obj.corners;
        poly.setAttribute('points', `${c.tl.x},${c.tl.y} ${c.tr.x},${c.tr.y} ${c.br.x},${c.br.y} ${c.bl.x},${c.bl.y}`);
      }

      const label = document.getElementById(ids.label);
      if (label) {
        const c = obj.corners;
        const centerX = Math.round((c.tl.x + c.tr.x) / 2);
        const topY = Math.round(Math.min(c.tl.y, c.tr.y) - 20);
        label.setAttribute('transform', `translate(${centerX}, ${topY})`);
      }
    }

    updateCalibratorHandles();
  }

  function updateCalibratorHandles() {
    const layer = document.getElementById('calibratorHandles');
    const panel = document.getElementById('calibratorPanel');
    if (!layer || !panel || !panel.classList.contains('active')) {
      if (layer) layer.style.display = 'none';
      return;
    }
    layer.style.display = 'block';

    const obj = CALIBRATION[activeCalibratorTab];
    if (!obj) return;

    const c = obj.corners;
    setHandlePos('handleTL', c.tl.x, c.tl.y);
    setHandlePos('handleTR', c.tr.x, c.tr.y);
    setHandlePos('handleBR', c.br.x, c.br.y);
    setHandlePos('handleBL', c.bl.x, c.bl.y);
    setHandlePos('handleEffect', obj.effect.x, obj.effect.y);

    const guide = document.getElementById('handleGuideLine');
    if (guide) {
      guide.setAttribute('points', `${c.tl.x},${c.tl.y} ${c.tr.x},${c.tr.y} ${c.br.x},${c.br.y} ${c.bl.x},${c.bl.y} ${c.tl.x},${c.tl.y}`);
    }
  }

  function setHandlePos(id, x, y) {
    const el = document.getElementById(id);
    if (!el) return;
    el.setAttribute('transform', `translate(${x}, ${y})`);
  }

  function initCalibratorInteractions() {
    const handles = document.querySelectorAll('.calibrator-handles-layer .handle-item');
    handles.forEach(h => {
      h.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        isDraggingHandle = true;
        activeDragHandleKey = h.getAttribute('data-handle');
        h.setPointerCapture(e.pointerId);
      });

      h.addEventListener('pointermove', (e) => {
        if (!isDraggingHandle || !activeDragHandleKey) return;
        e.preventDefault();
        e.stopPropagation();

        const svgPt = screenToSvg(e.clientX, e.clientY);
        const x = Math.round(Math.max(0, Math.min(1376, svgPt.x)));
        const y = Math.round(Math.max(0, Math.min(768, svgPt.y)));

        const obj = CALIBRATION[activeCalibratorTab];
        if (!obj) return;

        if (activeDragHandleKey === 'effect') {
          obj.effect.x = x;
          obj.effect.y = y;
        } else if (obj.corners[activeDragHandleKey]) {
          obj.corners[activeDragHandleKey].x = x;
          obj.corners[activeDragHandleKey].y = y;
        }

        applyCalibration();
        renderCalibratorControls();
      });

      const stopDrag = (e) => {
        if (isDraggingHandle) {
          isDraggingHandle = false;
          activeDragHandleKey = null;
          saveCalibrationToStorage();
        }
      };

      h.addEventListener('pointerup', stopDrag);
      h.addEventListener('pointercancel', stopDrag);
    });
  }

  window.toggleCalibrator = function () {
    const panel = document.getElementById('calibratorPanel');
    if (!panel) return;
    const isNowActive = panel.classList.toggle('active');

    if (isNowActive) {
      activeObjectKey = activeCalibratorTab;
      applyCalibration();
      renderCalibratorControls();
      showToast('Calibrador ativo! Arraste na tela ou ajuste no painel.', 'info');
    } else {
      updateCalibratorHandles();
    }
  };

  window.setCalibratorObject = function (tabKey) {
    activeCalibratorTab = tabKey;
    activeObjectKey = tabKey;

    document.querySelectorAll('.cal-tab').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-tab') === tabKey);
    });

    document.querySelectorAll('.object-group').forEach(g => {
      g.classList.toggle('active', g.getAttribute('data-key') === tabKey);
    });
    updateNavPills(tabKey);

    applyCalibration();
    renderCalibratorControls();
  };

  function renderCalibratorControls() {
    const container = document.getElementById('calibratorContent');
    if (!container) return;

    const obj = CALIBRATION[activeCalibratorTab];
    if (!obj) return;

    const cornerLabels = {
      tl: 'Superior Esquerdo (TL)',
      tr: 'Superior Direito (TR)',
      br: 'Inferior Direito (BR)',
      bl: 'Inferior Esquerdo (BL)'
    };

    container.innerHTML = `
      <div class="cal-section-title">
        <i class="fas fa-crosshairs"></i> Ponto de Efeito Especial (${obj.effectName})
      </div>
      <div class="cal-corner-box">
        <div class="cal-input-row">
          <label>X:</label>
          <input type="range" min="0" max="1376" value="${obj.effect.x}" oninput="onCalibratorInputChange('effect', 'x', this.value)">
          <input type="number" min="0" max="1376" value="${obj.effect.x}" oninput="onCalibratorInputChange('effect', 'x', this.value)">
        </div>
        <div class="cal-input-row">
          <label>Y:</label>
          <input type="range" min="0" max="768" value="${obj.effect.y}" oninput="onCalibratorInputChange('effect', 'y', this.value)">
          <input type="number" min="0" max="768" value="${obj.effect.y}" oninput="onCalibratorInputChange('effect', 'y', this.value)">
        </div>
      </div>

      <div class="cal-section-title">
        <i class="fas fa-vector-square"></i> 4 Cantos Livres da Moldura
      </div>
      <div class="cal-corner-grid">
        ${['tl', 'tr', 'bl', 'br'].map(c => `
          <div class="cal-corner-box">
            <div class="cal-corner-title">${cornerLabels[c]}</div>
            <div class="cal-input-row">
              <label>X:</label>
              <input type="range" min="0" max="1376" value="${obj.corners[c].x}" oninput="onCalibratorInputChange('${c}', 'x', this.value)">
              <input type="number" min="0" max="1376" value="${obj.corners[c].x}" oninput="onCalibratorInputChange('${c}', 'x', this.value)">
            </div>
            <div class="cal-input-row">
              <label>Y:</label>
              <input type="range" min="0" max="768" value="${obj.corners[c].y}" oninput="onCalibratorInputChange('${c}', 'y', this.value)">
              <input type="number" min="0" max="768" value="${obj.corners[c].y}" oninput="onCalibratorInputChange('${c}', 'y', this.value)">
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  window.onCalibratorInputChange = function (target, axis, val) {
    const num = Math.round(Number(val));
    if (isNaN(num)) return;

    const obj = CALIBRATION[activeCalibratorTab];
    if (!obj) return;

    if (target === 'effect') {
      obj.effect[axis] = num;
    } else if (obj.corners[target]) {
      obj.corners[target][axis] = num;
    }

    applyCalibration();
    renderCalibratorControls();
    saveCalibrationToStorage();
  };

  window.copyFullCalibrationJSON = function () {
    const exportData = {
      antennaX: CALIBRATION.radio.effect.x,
      antennaY: CALIBRATION.radio.effect.y,
      lampX: CALIBRATION.dev.effect.x,
      lampY: CALIBRATION.dev.effect.y,
      ecgX: CALIBRATION.medical.effect.x,
      ecgY: CALIBRATION.medical.effect.y,
      tvX: CALIBRATION.tv.effect.x,
      tvY: CALIBRATION.tv.effect.y,
      frames: {
        radio: CALIBRATION.radio.corners,
        dev: CALIBRATION.dev.corners,
        medical: CALIBRATION.medical.corners,
        tv: CALIBRATION.tv.corners
      }
    };

    const jsonStr = JSON.stringify(exportData, null, 2);
    navigator.clipboard.writeText(jsonStr).then(() => {
      showToast('Configuração completa copiada com sucesso!', 'success');
    }).catch(() => {
      showToast('Não foi possível copiar automaticamente.', 'info');
    });
  };

  window.resetCalibrationToDefault = function () {
    CALIBRATION = JSON.parse(JSON.stringify(DEFAULT_CALIBRATION));
    saveCalibrationToStorage();
    applyCalibration();
    renderCalibratorControls();
    showToast('Coordenadas restauradas aos padrões.', 'info');
  };

  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeObjectModal();
        closePortfolioModal();
        closeMiniModal('qrModal');
        closeMiniModal('leadsModal');
        const cal = document.getElementById('calibratorPanel');
        if (cal) {
          cal.classList.remove('active');
          updateCalibratorHandles();
        }
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
