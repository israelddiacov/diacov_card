/**
 * DIACOV INFORMÁTICA - CARTÃO DIGITAL & PORTFÓLIO EXECUTIVO
 * Lógica 100% Nativa do Navegador (Vanilla JS - Zero Dependências Obrigatórias)
 */

(function () {
  'use strict';

  // Configuração e Dados de Contato
  const CONTACT_INFO = {
    name: 'Israel D. Diacov',
    company: 'Diacov Informática & Engenharia de Software',
    title: 'Engenheiro de Software & Consultor TI',
    phoneFormatted: '(41) 99924-8171',
    phoneRaw: '5541999248171',
    email: 'israelddiacov@outlook.com.br',
    location: 'Curitiba - PR, Brasil',
    pix: 'israelddiacov@outlook.com.br',
    website: window.location.href
  };

  // Inicialização
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initProjectFilters();
    initContactForm();
    initModals();
    initLeadManager();
    initServiceWorker();
  });

  /* ==========================================================================
     1. TEMA DARK / LIGHT (PERSISTENTE)
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
        showToast(`Tema ${nextTheme === 'dark' ? 'Escuro' : 'Claro'} ativado`, 'info');
      });
    }
  }

  function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (!icon) return;
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
      icon.title = 'Alternar para Modo Claro';
    } else {
      icon.className = 'fas fa-moon';
      icon.title = 'Alternar para Modo Escuro';
    }
  }

  /* ==========================================================================
     2. GERAÇÃO E DOWNLOAD DE CONTATO (.vCard / .vcf)
     ========================================================================== */
  window.downloadVCard = function () {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${CONTACT_INFO.name}`,
      `N:Diacov;Israel;;;`,
      `ORG:${CONTACT_INFO.company}`,
      `TITLE:${CONTACT_INFO.title}`,
      `TEL;TYPE=CELL,VOICE,PREF:+${CONTACT_INFO.phoneRaw}`,
      `EMAIL;TYPE=INTERNET,WORK,PREF:${CONTACT_INFO.email}`,
      `ADR;TYPE=WORK:;;Curitiba;PR;;Brasil`,
      `URL:${CONTACT_INFO.website}`,
      'NOTE:Soluções em TI, Engenharia de Software, Webflow/SEO e Consultoria Especializada.',
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

  /* ==========================================================================
     3. COMPARTILHAMENTO NATIVO (WEB SHARE API)
     ========================================================================== */
  window.shareCard = async function () {
    const shareData = {
      title: `${CONTACT_INFO.name} - Cartão Digital`,
      text: `Conecte-se com Israel Diacov - Soluções em TI, Engenharia de Software e Consultoria:`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast('Cartão compartilhado com sucesso!', 'success');
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyCardLink();
        }
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

  /* ==========================================================================
     4. QR CODE DINÂMICO NATIVO (CANVAS)
     ========================================================================== */
  window.openQRCodeModal = function () {
    const modal = document.getElementById('qrModal');
    if (!modal) return;
    modal.classList.add('active');
    renderQRCode(window.location.href);
  };

  function renderQRCode(text) {
    const canvas = document.getElementById('qrCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 220;
    canvas.width = size;
    canvas.height = size;

    // Fundo Branco
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    // Carrega QR via gerador rápido embutido ou API visual com fallback
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      ctx.drawImage(img, 10, 10, size - 20, size - 20);
    };
    img.onerror = function () {
      // Fallback estético desenhado no Canvas
      ctx.fillStyle = '#0a0d14';
      ctx.fillRect(20, 20, 40, 40);
      ctx.fillRect(size - 60, 20, 40, 40);
      ctx.fillRect(20, size - 60, 40, 40);
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('diacov.com.br', size / 2, size / 2);
    };
    // Gerador universal de QR code SVG/PNG
    img.src = `https://api.qrserver.com/com/1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}&color=0b0f17`;
  }

  /* ==========================================================================
     5. FILTRO INTERATIVO DE PROJETOS
     ========================================================================== */
  function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-chip');
    const cards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease-out';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ==========================================================================
     6. FORMULÁRIO DE CONTATO & ENCAMINHAMENTO WHATSAPP INTELIGENTE
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById('conciergeForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('leadName').value.trim();
      const phone = document.getElementById('leadPhone').value.trim();
      const service = document.getElementById('leadService').value;
      const message = document.getElementById('leadMessage').value.trim();

      if (!name || !phone) {
        showToast('Por favor, preencha nome e telefone.', 'info');
        return;
      }

      // Salva no LocalStorage Leads
      saveLeadLocally({ name, phone, service, message, date: new Date().toLocaleString('pt-BR') });

      // Monta mensagem elegante para o WhatsApp
      const whatsappMsg = [
        `*Olá Israel! Solicitação de Atendimento (Cartão Digital)*`,
        `*Nome:* ${name}`,
        `*Contato/WhatsApp:* ${phone}`,
        `*Área de Interesse:* ${service || 'Consultoria / Módulos ERP'}`,
        message ? `*Mensagem:* ${message}` : ''
      ].filter(Boolean).join('\n\n');

      const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(whatsappMsg)}`;

      showToast('Redirecionando para o WhatsApp...', 'success');

      // Limpa formulário
      form.reset();

      // Abre o WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 600);
    });
  }

  function saveLeadLocally(lead) {
    try {
      const existing = JSON.parse(localStorage.getItem('diacov_leads') || '[]');
      existing.unshift(lead);
      localStorage.setItem('diacov_leads', JSON.stringify(existing));
    } catch (e) {
      console.warn('Erro ao salvar lead localmente:', e);
    }
  }

  /* ==========================================================================
     7. PAINEL DE LEADS EXCLUSIVO (ADMIN MODAL)
     ========================================================================== */
  function initLeadManager() {
    window.openLeadsModal = function () {
      const modal = document.getElementById('leadsModal');
      if (!modal) return;
      renderLeadsTable();
      modal.classList.add('active');
    };

    window.exportLeadsCSV = function () {
      const leads = JSON.parse(localStorage.getItem('diacov_leads') || '[]');
      if (leads.length === 0) {
        showToast('Nenhum contato para exportar.', 'info');
        return;
      }

      let csv = '\uFEFFData;Nome;Telefone;Serviço;Mensagem\n';
      leads.forEach(l => {
        csv += `"${l.date}";"${l.name}";"${l.phone}";"${l.service}";"${(l.message || '').replace(/"/g, '""')}"\n`;
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `leads_diacov_${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Planilha CSV exportada com sucesso!', 'success');
    };

    window.clearAllLeads = function () {
      if (confirm('Deseja realmente limpar todos os contatos salvos no navegador?')) {
        localStorage.removeItem('diacov_leads');
        renderLeadsTable();
        showToast('Histórico de contatos limpo.', 'info');
      }
    };
  }

  function renderLeadsTable() {
    const container = document.getElementById('leadsTableContainer');
    if (!container) return;

    const leads = JSON.parse(localStorage.getItem('diacov_leads') || '[]');

    if (leads.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--text-muted);">
          <i class="fas fa-inbox fa-2x" style="margin-bottom: 10px; display: block; opacity: 0.5;"></i>
          Nenhuma solicitação de contato registrada ainda neste navegador.
        </div>
      `;
      return;
    }

    let html = `
      <div class="leads-table-wrapper">
        <table class="leads-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Interesse</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
    `;

    leads.forEach((l) => {
      const cleanPhone = (l.phone || '').replace(/\D/g, '');
      html += `
        <tr>
          <td><small>${l.date}</small></td>
          <td><strong>${escapeHtml(l.name)}</strong></td>
          <td>${escapeHtml(l.phone)}</td>
          <td><span class="tech-tag">${escapeHtml(l.service || 'Geral')}</span></td>
          <td>
            <a href="https://wa.me/55${cleanPhone}" target="_blank" class="btn btn-sm btn-gold" style="padding: 4px 8px; font-size: 0.75rem;">
              <i class="fab fa-whatsapp"></i> Chamar
            </a>
          </td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    container.innerHTML = html;
  }

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }

  /* ==========================================================================
     8. MODAIS E TOASTS
     ========================================================================== */
  function initModals() {
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
      });
    });

    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    });
  }

  function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  /* ==========================================================================
     9. SERVICE WORKER / PWA (OPCIONAL / OFFLINE)
     ========================================================================== */
  function initServiceWorker() {
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('./sw.js').catch(() => {
        // Modo silencioso caso esteja rodando localmente sem HTTPS
      });
    }
  }

  // Exporta globalmente para uso em onclick nos botões
  window.showToast = showToast;
})();
