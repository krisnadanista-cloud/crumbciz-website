(function(){
  // Mobile Navigation Toggle
  const toggle = document.querySelector('.nav__toggle');
  const nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Order System
  const BASE_PRICE = 15000;
  let selectedTopping = null;
  let selectedSauce = null;
  const priceBox = document.getElementById('priceBox');
  const orderBtn = document.getElementById('orderBtn');

  // Topping Selection
  const toppingCards = document.querySelectorAll('#toppingGrid .card--selectable');
  toppingCards.forEach(card => {
    card.addEventListener('click', () => {
      toppingCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedTopping = card.getAttribute('data-topping');
      updatePrice();
    });
  });

  // Sauce Selection
  const sauceCards = document.querySelectorAll('#sauceGrid .card--selectable');
  sauceCards.forEach(card => {
    card.addEventListener('click', () => {
      sauceCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedSauce = card.getAttribute('data-sauce');
      updatePrice();
    });
  });

  // Update Price
  function updatePrice() {
    let total = BASE_PRICE;
    if (selectedSauce) {
      const saucePrice = parseInt(document.querySelector(`[data-sauce="${selectedSauce}"]`).getAttribute('data-price')) || 0;
      total += saucePrice;
    }
    priceBox.textContent = `Total: Rp${total.toLocaleString('id-ID')}`;
  }

  // WhatsApp Order
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      if (!selectedTopping) {
        alert('Silakan pilih topping terlebih dahulu!');
        return;
      }
      if (!selectedSauce) {
        alert('Silakan pilih sauce terlebih dahulu!');
        return;
      }

      const customerNameInput = document.getElementById('customerName');
      const customerName = customerNameInput ? customerNameInput.value.trim() : '';
      
      if (!customerName) {
        alert('Silakan masukkan nama Anda terlebih dahulu!');
        if (customerNameInput) {
          customerNameInput.focus();
        }
        return;
      }

      const customerAddressInput = document.getElementById('customerAddress');
      const customerAddress = customerAddressInput ? customerAddressInput.value.trim() : '';
      
      if (!customerAddress) {
        alert('Silakan masukkan alamat tempat tinggal Anda terlebih dahulu!');
        if (customerAddressInput) {
          customerAddressInput.focus();
        }
        return;
      }

      const saucePrice = parseInt(document.querySelector(`[data-sauce="${selectedSauce}"]`).getAttribute('data-price')) || 0;
      const total = BASE_PRICE + saucePrice;

      const message = `Halo! Saya ingin memesan Cheesecake:\n\n` +
        `Nama: ${customerName}\n` +
        `Alamat: ${customerAddress}\n` +
        `Topping: ${selectedTopping}\n` +
        `Sauce: ${selectedSauce}\n` +
        `Total: Rp${total.toLocaleString('id-ID')}\n\n` +
        `Terima kasih!`;

      const whatsappUrl = `https://wa.me/6282189776753?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
})();
