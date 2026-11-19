
// =====================================
// WILD WORLD — MAIN JAVASCRIPT
// =====================================

const animals = [
  { name:"Arslon", en:"Lion", category:"mammal", emoji:"🦁", desc:"O‘rmonlar va savannalar qiroli." },
  { name:"Yo‘lbars", en:"Tiger", category:"mammal", emoji:"🐅", desc:"Kuchli va chaqqon yirtqich." },
  { name:"Fil", en:"African elephant", category:"mammal", emoji:"🐘", desc:"Quruqlikdagi eng yirik hayvon." },
  { name:"Jirafa", en:"Giraffe", category:"mammal", emoji:"🦒", desc:"Uzun bo‘yni bilan mashhur." },
  { name:"Zebra", en:"Zebra", category:"mammal", emoji:"🦓", desc:"Chiziqli terisi bilan ajralib turadi." },
  { name:"Maymun", en:"Chimpanzee", category:"mammal", emoji:"🐒", desc:"Aqlli va qiziquvchan jonzot." },
  { name:"Gorilla", en:"Gorilla", category:"mammal", emoji:"🦍", desc:"Kuchli va ijtimoiy primat." },
  { name:"Kenguru", en:"Kangaroo", category:"mammal", emoji:"🦘", desc:"Sakrab harakatlanadigan Avstraliya hayvoni." },
  { name:"Panda", en:"Giant panda", category:"mammal", emoji:"🐼", desc:"Bambukni yaxshi ko‘radigan osoyishta hayvon." },
  { name:"Koala", en:"Koala", category:"mammal", emoji:"🐨", desc:"Evkalipt daraxtlarida yashaydi." },
  { name:"Bo‘ri", en:"Gray wolf", category:"mammal", emoji:"🐺", desc:"To‘da bo‘lib ov qiladigan yirtqich." },
  { name:"Tulki", en:"Red fox", category:"mammal", emoji:"🦊", desc:"Ziyrak va chaqqon hayvon." },
  { name:"Ayiq", en:"Brown bear", category:"mammal", emoji:"🐻", desc:"Kuchli va yirik sutemizuvchi." },
  { name:"Qoplon", en:"Leopard", category:"mammal", emoji:"🐆", desc:"Daraxtga mahorat bilan chiqadi." },
  { name:"Gepard", en:"Cheetah", category:"mammal", emoji:"🐆", desc:"Quruqlikdagi eng tez yuguruvchi." },
  { name:"Begemot", en:"Hippopotamus", category:"mammal", emoji:"🦛", desc:"Suvda ko‘p vaqt o‘tkazadi." },
  { name:"Karkidon", en:"Rhinoceros", category:"mammal", emoji:"🦏", desc:"Qalin terili va shoxli hayvon." },
  { name:"Bug‘u", en:"Red deer", category:"mammal", emoji:"🦌", desc:"Shoxlari bilan ajralib turadi." },
  { name:"Tuya", en:"Dromedary camel", category:"mammal", emoji:"🐪", desc:"Cho‘l sharoitiga moslashgan." },
  { name:"Sirtlon", en:"Spotted hyena", category:"mammal", emoji:"🐾", desc:"Kuchli jag‘lari bilan tanilgan." },
  { name:"Pingvin", en:"Emperor penguin", category:"bird", emoji:"🐧", desc:"Sovuqqa chidamli, ucha olmaydigan qush." },
  { name:"Burgut", en:"Golden eagle", category:"bird", emoji:"🦅", desc:"O‘tkir nigohli yirtqich qush." },
  { name:"Tovus", en:"Peacock", category:"bird", emoji:"🦚", desc:"Rang-barang dum patlari bilan mashhur." },
  { name:"Flamingo", en:"Greater flamingo", category:"bird", emoji:"🦩", desc:"Uzun oyoqli pushti qush." },
  { name:"To‘tiqush", en:"Macaw parrot", category:"bird", emoji:"🦜", desc:"Rangli patlari va ovozi bilan mashhur." },
  { name:"Boyqush", en:"Eurasian eagle owl", category:"bird", emoji:"🦉", desc:"Tunda faol bo‘ladigan qush." },
  { name:"Laylak", en:"White stork", category:"bird", emoji:"🪽", desc:"Uzun oyoqli ko‘chmanchi qush." },
  { name:"Tuyaqush", en:"Ostrich", category:"bird", emoji:"🐦", desc:"Dunyodagi eng katta qush." },
  { name:"Pelikan", en:"Great white pelican", category:"bird", emoji:"🐦", desc:"Katta tumshug‘i bilan ajralib turadi." },
  { name:"Kakadu", en:"Sulphur-crested cockatoo", category:"bird", emoji:"🦜", desc:"Boshidagi toj patlari bilan tanilgan." },
  { name:"Timsoh", en:"Nile crocodile", category:"reptile", emoji:"🐊", desc:"Suv bo‘yida yashaydigan yirtqich." },
  { name:"Iguana", en:"Green iguana", category:"reptile", emoji:"🦎", desc:"Daraxtlarda yashaydigan kaltakesak." },
  { name:"Xameleon", en:"Panther chameleon", category:"reptile", emoji:"🦎", desc:"Rangini o‘zgartira oladigan jonzot." },
  { name:"Pitон", en:"Reticulated python", category:"reptile", emoji:"🐍", desc:"Zaharli bo‘lmagan yirik ilon." },
  { name:"Kobra", en:"King cobra", category:"reptile", emoji:"🐍", desc:"Mashhur zaharli ilon." },
  { name:"Toshbaqa", en:"Galapagos tortoise", category:"reptile", emoji:"🐢", desc:"Uzoq umr ko‘rishi bilan mashhur." },
  { name:"Varan", en:"Komodo dragon", category:"reptile", emoji:"🦎", desc:"Yirik va kuchli kaltakesak." },
  { name:"Anakonda", en:"Green anaconda", category:"reptile", emoji:"🐍", desc:"Dunyodagi eng og‘ir ilonlardan biri." },
  { name:"Dengiz toshbaqasi", en:"Green sea turtle", category:"water", emoji:"🐢", desc:"Dengizlarda yashaydigan qadimiy jonzot." },
  { name:"Delfin", en:"Bottlenose dolphin", category:"water", emoji:"🐬", desc:"Aqlli va o‘ynoqi dengiz sutemizuvchisi." },
  { name:"Akula", en:"Great white shark", category:"water", emoji:"🦈", desc:"Dengizning mashhur yirtqichi." },
  { name:"Kit", en:"Humpback whale", category:"water", emoji:"🐋", desc:"Ulkan dengiz sutemizuvchisi." },
  { name:"Ahtapot", en:"Common octopus", category:"water", emoji:"🐙", desc:"Sakkizta qo‘li va yuqori aqli bilan tanilgan." },
  { name:"Meduza", en:"Moon jellyfish", category:"water", emoji:"🪼", desc:"Suvda suzib yuradigan shaffof jonzot." },
  { name:"Skat", en:"Manta ray", category:"water", emoji:"🐟", desc:"Keng qanotga o‘xshash suzgichlari bor." },
  { name:"Dengiz oti", en:"Seahorse", category:"water", emoji:"🐠", desc:"O‘ziga xos shakldagi kichik baliq." },
  { name:"Pingvin baliq", en:"Clownfish", category:"water", emoji:"🐠", desc:"Rang-barang rif baliqlaridan biri." },
  { name:"Morj", en:"Walrus", category:"water", emoji:"🦭", desc:"Uzun qoziq tishli dengiz hayvoni." },
  { name:"Tyulen", en:"Harbor seal", category:"water", emoji:"🦭", desc:"Suvda chaqqon suzuvchi sutemizuvchi." },
  { name:"Orka", en:"Killer whale", category:"water", emoji:"🐳", desc:"Dengizdagi kuchli va aqlli yirtqich." }
];

const categoryNames = {
  mammal: "Sutemizuvchi",
  bird: "Qush",
  reptile: "Sudralib yuruvchi",
  water: "Suv hayvoni"
};

const grid = document.getElementById("animalGrid");
let currentFilter = "all";
let imageObserver;

// =====================================
// HAYVON KARTALARINI YARATISH
// =====================================

function createAnimalCard(animal, index) {
  const card = document.createElement("article");
  card.className = "animal-card";
  card.dataset.category = animal.category;

  const imageUrl = `https://placehold.co/640x420/e0e8d6/35513b?text=${encodeURIComponent(animal.name)}`;

  card.innerHTML = `
    <div class="animal-image">
      <img
        src="${imageUrl}"
        alt="${animal.name}"
        loading="lazy"
        data-animal="${animal.en}"
      >
      <span class="animal-emoji">${animal.emoji}</span>
      <span class="animal-number">WW / ${String(index + 1).padStart(2, "0")}</span>
    </div>
    <div class="animal-info">
      <h3>${animal.name}</h3>
      <p>${animal.desc}</p>
      <span class="animal-tag">${categoryNames[animal.category]}</span>
    </div>
  `;

  return card;
}

function renderAnimals() {
  grid.innerHTML = "";

  const filtered = animals.filter(animal =>
    currentFilter === "all" || animal.category === currentFilter
  );

  filtered.forEach((animal) => {
    const originalIndex = animals.indexOf(animal);
    grid.appendChild(createAnimalCard(animal, originalIndex));
  });

  observeAnimalImages();
}

renderAnimals();

// =====================================
// WIKIMEDIA COMMONS — RASMLARNI TOPISH
// =====================================

async function getAnimalImage(searchName) {
  const apiUrl = new URL("https://commons.wikimedia.org/w/api.php");

  apiUrl.search = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchName + " animal",
    gsrnamespace: "6",
    gsrlimit: "1",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "640",
    format: "json",
    origin: "*"
  });

  const response = await fetch(apiUrl.toString());

  if (!response.ok) {
    throw new Error("Rasm serveridan javob kelmadi");
  }

  const data = await response.json();
  const pages = data.query?.pages;

  if (!pages) {
    throw new Error("Rasm topilmadi");
  }

  const firstPage = Object.values(pages)[0];
  const imageInfo = firstPage?.imageinfo?.[0];

  return imageInfo?.thumburl || imageInfo?.url || null;
}

function observeAnimalImages() {
  if (imageObserver) imageObserver.disconnect();

  imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        imageObserver.unobserve(img);
        loadAnimalImage(img);
      }
    });
  }, {
    rootMargin: "250px"
  });

  document.querySelectorAll(".animal-image img[data-animal]").forEach(img => {
    imageObserver.observe(img);
  });
}

async function loadAnimalImage(img) {
  const animalName = img.dataset.animal;

  try {
    const imageUrl = await getAnimalImage(animalName);

    if (imageUrl) {
      img.src = imageUrl;
      img.removeAttribute("data-animal");
    }
  } catch (error) {
    // Zaxira rasmi saqlanadi — buzilgan rasm belgisi chiqmaydi.
    console.warn(`${animalName} rasmi yuklanmadi:`, error.message);
  }
}

// =====================================
// KATEGORIYA FILTRLARI
// =====================================

document.getElementById("filters").addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (!button) return;

  document.querySelectorAll(".filter").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
  currentFilter = button.dataset.filter;
  renderAnimals();
});

// =====================================
// LOADER
// =====================================

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 650);
});

setTimeout(() => {
  document.getElementById("loader")?.classList.add("hide");
}, 3500);

// =====================================
// MOBIL MENYU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// =====================================
// SCROLL ANIMATSIYALARI
// =====================================

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeReveals() {
  document.querySelectorAll(".reveal:not(.visible)").forEach(element => {
    revealObserver.observe(element);
  });
}

observeReveals();

// Yangi render bo‘lgan kartalar uchun
const revealMutationObserver = new MutationObserver(() => {
  observeReveals();
});

revealMutationObserver.observe(document.body, {
  childList: true,
  subtree: true
});

// =====================================
// STATISTIKA HISOBLAGICHI
// =====================================

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const element = entry.target;
    const target = Number(element.dataset.count);
    const duration = 1300;
    const start = performance.now();

    function updateCounter(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.floor(target * eased);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    }

    requestAnimationFrame(updateCounter);
    statObserver.unobserve(element);
  });
}, { threshold: 0.5 });

document.querySelectorAll("[data-count]").forEach(item => {
  statObserver.observe(item);
});

// =====================================
// CHIPTA MODALI
// =====================================

const ticketModal = document.getElementById("ticketModal");
const successModal = document.getElementById("successModal");
const ticketForm = document.getElementById("ticketForm");

document.querySelectorAll("[data-ticket]").forEach(button => {
  button.addEventListener("click", () => {
    ticketModal.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

function closeTicketModal() {
  ticketModal.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("closeTicket").addEventListener("click", closeTicketModal);

ticketModal.addEventListener("click", (event) => {
  if (event.target === ticketModal) closeTicketModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTicketModal();
    successModal.classList.remove("open");
    document.body.style.overflow = "";
  }
});

// Sana uchun bugungi kundan oldingi sanalarni yopish
const visitDate = document.getElementById("visitDate");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString().split("T")[0];

visitDate.min = localToday;
visitDate.value = localToday;

// =====================================
// CHIPTA NARXINI HISOBLASH
// =====================================

const adultQty = document.getElementById("adultQty");
const childQty = document.getElementById("childQty");
const familyQty = document.getElementById("familyQty");
const totalPrice = document.getElementById("totalPrice");

function calculateTotal() {
  const adults = Math.max(0, Number(adultQty.value) || 0);
  const children = Math.max(0, Number(childQty.value) || 0);
  const families = Math.max(0, Number(familyQty.value) || 0);

  const total = adults * 50000 + children * 30000 + families * 140000;

  totalPrice.textContent = total.toLocaleString("uz-UZ") + " so‘m";
  return total;
}

[adultQty, childQty, familyQty].forEach(input => {
  input.addEventListener("input", calculateTotal);
});

// =====================================
// BUYURTMA FORMASI
// =====================================

ticketForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const date = visitDate.value;
  const total = calculateTotal();

  const adults = Number(adultQty.value) || 0;
  const children = Number(childQty.value) || 0;
  const families = Number(familyQty.value) || 0;

  if (!name || !phone || !date) {
    alert("Iltimos, barcha maydonlarni to‘ldiring.");
    return;
  }

  if (total <= 0) {
    alert("Kamida bitta chipta tanlang.");
    return;
  }

  const order = {
    name,
    phone,
    date,
    adults,
    children,
    families,
    total,
    createdAt: new Date().toISOString()
  };

  console.log("Yangi buyurtma:", order);

  document.getElementById("successText").textContent =
    `${name}, ${date} sanasi uchun buyurtmangiz demo rejimida qabul qilindi. Jami: ${total.toLocaleString("uz-UZ")} so‘m.`;

  closeTicketModal();
  successModal.classList.add("open");

  ticketForm.reset();
  visitDate.value = localToday;
  adultQty.value = 1;
  childQty.value = 0;
  familyQty.value = 0;
  calculateTotal();
});

document.getElementById("closeSuccess").addEventListener("click", () => {
  successModal.classList.remove("open");
  document.body.style.overflow = "";
});

// =====================================
// YUQORIGA QAYTISH TUGMALARI
// =====================================

const floatingTop = document.getElementById("floatingTop");

window.addEventListener("scroll", () => {
  floatingTop.classList.toggle("show", window.scrollY > 600);
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

floatingTop.addEventListener("click", scrollToTop);
document.getElementById("backTop").addEventListener("click", scrollToTop);

// =====================================
// YAKUNIY SOZLAMALAR
// =====================================

calculateTotal();
