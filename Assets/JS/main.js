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
      "Bounty-Bens-Maars-whiskas-skittles-snickers-m&m-م&م-سكيتلز- سنيكرز-ويسكاس-باونتي-.html",
      "always-gillette-olay-oral-crest-head&shoulders-pantine-duracell-braun-vicks-tide-downy-pampers-اولويز-بامبرز-جيليت-اولاي-اورال-هيد-اند-شولدرز-بانتين-دوراسل-براون-فيكس-تايد-داوني.html",
      "Dove-Axe-Sunsilk-Vim-Close-Comfort-كنور-دوف-صن-سيلك-فيم-فازلين-vaseline-كومفورت-اكس-كلوز-tresemme-تريزيميه.html",
      "Johnson&Johnson-جونسون.html",
      "Garnier-Nestle-Nesquik-purina-kitkat-aero-smarties-ralph-giorgio-armani-nescafe-shop-شوب-بورينا-كيتكات-ايرو-نيسكافيه-نسكويك-رالف-جارنييه-ميبيلين-maybeline.html",
      "كرافت-هاينز-kraft-heinz.html",
      "pizza-hut-بيتزا-هت.html",
      "كلينكس-كلينيكس-kleenex.html",
      "GM-chevrolet-cadillac-gmc-opel-شيفروليه-كاديلاك-جمس-اوبيل.html",
      "Caterpillar-كاتربيلر.html",
      "Hyundai-هيونداي.html",
      "Pepsi-seven-marinda-dew-aquafinaa-أكوافينا-سيفن-بيبسي-ماريندا.html",
      "Coca-cola-dew-sprite-fanta-monster-مونستر-سبرايت-فانتا-ديو-كولا.html",
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
      "Bounty-Bens-Mars-مارس-whiskas-skittles-snickers-m&m-م&م-سكيتلز- سنيكرز-ويسكاس-باونتي-.html",
      "loreal-لوريال-فيتشي-Vichy.html",
      "شيبسي-ليز-lays.html",
      "knorr-كنور-lipton-ليبتون.html",
      "Starbucks-ستاربكس.html",
      "Costa-كوستا.html"
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
    window.location.href = closestMatch;
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
