const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm !== "") {
    // Find the closest matching page name
    const pageNames = [
      "NO.HTML",
      "mcdonalds-مكدونالدز.html",
      "always-اولويز.html",
      "Johnson&Johnson-جونسون.html",
      "Nestle-Nesquik-kitkat-aero-nescafe-كيتكات-ايرو-نيسكافيه-نسكويك-.html",
      "كرافت-هاينز-kraft-heinz.html",
      "pizza-hut-بيتزا-هت.html",
      "كلينكس-كلينيكس-kleenex.html",
      "GM-chevrolet-cadillac-gmc-opel-شيفروليه-كاديلاك-جمس-اوبيل.html",
      "Caterpillar-كاتربيلر.html",
      "Hyundai-هيونداي.html",
      "Pepsi-seven-marinda-dew-aquafinaa-أكوافينا-سيفن-بيبسي-ماريندا.html",
      "Coca-cola-dew-sprite-fanta-سبرايت-فانتا-ديو-كولا.html",
      "intel-انتل.html",
      "HP-اتشبي.html",
      "Amazon-امازون.html",
      "Apple-آبل-ابل.html",
      "dell-ديل.html",
      "IBM.html",
      "Trip-advisor-تريب-ادفايزور.html",
      "Microsoft-مايكروسوفت.html",
      "Fiver-فايفر.html",
      "wix-ويكس.html",
      "Airbnb-اير.html",
      "Booking-بوكينغ.html",
      "DeviantArt-ديفيانت.html",
      "Monday-مونداي.html",
      "waze-ويز.html",
      "Siemens-سيمينز.html",
      "Puma-بوما.html",
      "Fiver-فايفر.html",
      "Bounty-Bens-Mars-مارس-snickers- سنيكرز-باونتي-.html",
      "loreal-لوريال-فيتشي-Vichy.html",
      "شيبسي-ليز-lays.html",
      "knorr-كنور-lipton-ليبتون.html",
      "Starbucks-ستاربكس.html",
      "Costa-كوستا.html",
      "pampers-بامبرز.html",
      "gillette-جيليت.html",
      "olay-أولاي.html",
      "Cadbury-كادبوري.html",
      "close-كلوز.html",
      "crest-كريست.html",
      "Dove-دوف.html",
      "Fayrouz-فيروز.html",
      "Axe-اكس.html",
      "sunsilk-صنسيلك.html",
      "vim-فيم.html",
      "comfort-كومفورت.html",
      "vaseline-فازلين.html",
      "tresemme-تريزيميه.html",
      "purina-بورينا.html",
      "Garnier-جارنييه.html",
      "Maggi-ماجي.html",
      "head&shoulder-هيد-شولدرز.html",
      "oral-اورال.html",
      "duracell-دوراسل.html",
      "braun-براون.html",
      "tide-تايد.html",
      "vicks-فيكس.html",
      "downy-داوني.html",
      "Herbal-Essence-هيربال.html",
      "m&ms.html",
      "Barbican-باربيكان.html",
      "Monster-مونستر.html",
      "Moussy-موسي-موسى.html",
      "maybeline-ميبيلين.html",
      "smarties-سمارتيز.html",
      "Maltesers-مالتيزرز.html",
      "signal-سيجنال.html",
      "Pantene-بانتين.html",
      "Skittles-سكيتلز.html",
      "whiskas-ويسكاس.html"
      // Add more page names as needed
    ];

    let closestMatch = "";
    let closestMatchScore = -Infinity;

    pageNames.forEach((pageName) => {
      const score = calculateMatchScore(searchTerm, pageName.toLowerCase());
      if (score > closestMatchScore) {
        closestMatch = pageName;
        closestMatchScore = score;
      }
    });

    // Redirect to the closest matching page
    window.location.href = "Companies/" + closestMatch;
  }
});

function calculateMatchScore(searchTerm, pageName) {
  let score = 0;
  searchTerm = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  pageName = pageName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let searchTermIndex = 0;
  for (let i = 0; i < pageName.length; i++) {
    if (pageName[i] === searchTerm[searchTermIndex]) {
      searchTermIndex++;
      if (searchTermIndex === searchTerm.length) {
        score += searchTerm.length; // Increase score by the length of searchTerm
        break; // All letters in searchTerm have been found consecutively
      }
    } else {
      searchTermIndex = 0; // Reset searchTermIndex if consecutive match is broken
    }
  }
  return score;
}
