/**
 * Maison Vélure Paris — Editorial Leather Journal & Blog Data
 * Strictly categorized articles with unique imagery, non-repeated content, and unique authors.
 * Exactly 3 articles per category across 6 categories (Total 18 articles, perfectly filling 3-column grid).
 */
const BLOG_POSTS = [
  // ==========================================
  // Category 1: Fashion Trends (3 unique articles)
  // ==========================================
  {
    id: "evening-bags-clutches-minaudieres",
    title: "Evening Bags Decoded: Clutches, Pouches & Jewel Minaudières for Soirees",
    slug: "evening-bags-clutches-minaudieres",
    category: "Fashion Trends",
    author: "Hélène de Saint-Germain",
    authorRole: "Haute Horlogerie & Minaudière Curator",
    authorAvatar: "assets/images/about/about-craftsman.jpg",
    date: "September 29, 2026",
    readTime: "4 min read",
    image: "assets/images/blog/blog-4.jpg",
    tags: ["Evening Wear", "Clutches", "Gala Style", "Jewelry Bags"],
    summary: "A curated overview of evening silhouettes: when to opt for a rigid metallic minaudière versus a supple satin pouch or a velvet envelope clutch for black-tie gatherings.",
    content: `
      <p class="lead">When gala invitations arrive, the evening bag ceases to be mere utility and transforms into wearable fine jewelry. Here is how to navigate evening dress codes with flawless distinction.</p>
      <h2>The Sculptural Minaudière</h2>
      <p>Engineered with rigid metallic or acrylic shells, the minaudière is designed to be cradled in the palm of your hand. It accommodates only the essentials: lipstick, compact, keys, and cards. Pair with liquid satin gowns or sharply tailored tuxedos.</p>
      <h2>The Romantic Velvet Envelope</h2>
      <p>Silk velvet clutches bring rich textural warmth to winter events and autumn weddings. The antique gold kiss-lock closure provides an evocative heirloom click that never fails to enchant.</p>
    `
  },
  {
    id: "runway-oversized-hobo-slouch-2026",
    title: "The Return of the Slouchy Hobo: Runway Proportions Redefining Luxury",
    slug: "runway-oversized-hobo-slouch-2026",
    category: "Fashion Trends",
    author: "Vivienne Marchand",
    authorRole: "Runway Accessories Editor, Paris",
    authorAvatar: "assets/images/about/about-atelier.jpg",
    date: "October 28, 2026",
    readTime: "5 min read",
    image: "assets/images/products/shoulder-bags/shoulder-4.jpg",
    tags: ["Runway Trends", "Hobo Bag", "Slouchy Silhouette", "Paris Fashion Week"],
    summary: "Fluid drape meets architectural leathercraft as oversized slouchy hobo bags reclaim the international runways with effortless everyday opulence.",
    content: `
      <p class="lead">After seasons of rigid micro-boxes, fashion has swung back toward tactile, enveloping ease. The oversized hobo bag embodies modern nonchalance without sacrificing high-craft prestige.</p>
      <h2>1. The Tactile Appeal of Glove Lambskin</h2>
      <p>A successful slouch bag requires hides with exceptional tensile suppleness. Our Florentine artisans hand-mill full-grain nappa to achieve a fluid drape that moves harmoniously with every stride.</p>
      <h2>2. Relaxed Silhouettes with Elevated Hardware</h2>
      <p>The contrast between an unhurried, unstructured bag body and high-polish 24K gold chain links creates a sublime tension between casual ease and unapologetic luxury.</p>
    `
  },
  {
    id: "quiet-luxury-hardware-minimalism",
    title: "Quiet Luxury & Discreet Metalwork: Why Understated Bag Hardware Is Dominating",
    slug: "quiet-luxury-hardware-minimalism",
    category: "Fashion Trends",
    author: "Thierry Girard",
    authorRole: "Hardware Metallurgist & 24K Gilder",
    authorAvatar: "assets/images/about/about-workshop.jpg",
    date: "October 15, 2026",
    readTime: "6 min read",
    image: "assets/images/products/handbags/handbag-2.jpg",
    tags: ["Quiet Luxury", "Hardware", "Solid Brass", "Minimalism"],
    summary: "Departing from oversized monogram plates, the fashion elite embraces subtle brushed brass turn-locks and whisper-quiet concealed closures.",
    content: `
      <p class="lead">True luxury whispers. The loudest shift in designer leather goods is the retreat from ostentatious logo plaques in favor of tactile metalwork integrated seamlessly into the leather structure.</p>
      <h2>1. Brushed Finishes Over Flashy Chrome</h2>
      <p>Brushed champagne gold and aged bronze offer a warm patina that avoids gaudy reflection. These understated finishes age alongside the leather, absorbing gentle wear as character rather than damage.</p>
      <h2>2. Concealed Engineering</h2>
      <p>Magnetic French clasps and flush-mounted push locks allow clean uninterrupted lines across front flaps, highlighting the natural grain of the calfskin hide.</p>
    `
  },

  // ==========================================
  // Category 2: Handbag Styling (3 unique articles)
  // ==========================================
  {
    id: "styling-crossbody-bags-2026",
    title: "How to Style a Crossbody Bag from Day to Night: The 2026 Sartorial Guide",
    slug: "styling-crossbody-bags-2026",
    category: "Handbag Styling",
    author: "Camille Laurent",
    authorRole: "Senior Accessories Stylist, Paris",
    authorAvatar: "assets/images/about/about-craftsman.jpg",
    date: "October 24, 2026",
    readTime: "5 min read",
    image: "assets/images/blog/blog-1.jpg",
    tags: ["Styling", "Crossbody", "Day-to-Night", "Wardrobe Essentials"],
    summary: "Discover the silhouette formulas and strap adjustments modern stylists use to transition sleek leather crossbody bags from daytime boardroom poise to evening cocktail glamour.",
    content: `
      <p class="lead">The modern crossbody bag has evolved far beyond casual weekend utility. In 2026, it represents the cornerstone of transitional dressing—effortlessly accompanying the cosmopolitan woman through morning executive meetings, afternoon client coffees, and midnight gallery openings.</p>
      <h2>1. The Geometry of Proportion</h2>
      <p>The secret to mastering the day-to-night crossbody lies in strap calibration. During daylight hours, adjust your strap so the bag rests comfortably at hip height or slightly above the pelvic bone.</p>
      <h2>2. Texture Juxtapositions</h2>
      <p>Pair structured full-grain calfskin against fluid silk slip dresses, or set a glossy crocodile-embossed silhouette against an oversized cashmere turtleneck.</p>
    `
  },
  {
    id: "monochrome-leather-styling-outerwear",
    title: "Tone-on-Tone Mastery: Pairing Handbag Leathers with Winter Wool & Trench Coats",
    slug: "monochrome-leather-styling-outerwear",
    category: "Handbag Styling",
    author: "Juliette Delacroix",
    authorRole: "Luxury Wardrobe & Silhouette Consultant",
    authorAvatar: "assets/images/about/about-workshop.jpg",
    date: "October 20, 2026",
    readTime: "5 min read",
    image: "assets/images/products/shoulder-bags/shoulder-2.jpg",
    tags: ["Monochrome Styling", "Outerwear", "Winter Fashion", "Color Coordination"],
    summary: "Curate effortless high-fashion contrast by pairing warm saddle leathers with camel cashmere coats and espresso box calf with charcoal tailoring.",
    content: `
      <p class="lead">Achieving monochromatic elegance requires playing with texture rather than identical hues. When your handbag shares the tonal family of your coat, the result is effortlessly cinematic.</p>
      <h2>1. The Camel & Cognac Harmony</h2>
      <p>A double-breasted camel wool coat paired with a warm cognac tote creates depth without competing focal points. The leather's glossy surface illuminates the matte nap of the wool.</p>
      <h2>2. Espresso on Noir</h2>
      <p>Break up an all-black winter ensemble by introducing an espresso brown shoulder bag. This nuanced dark neutral softens harsh lines and suggests an insider's appreciation for vintage palette balance.</p>
    `
  },
  {
    id: "top-handle-crossbody-double-strap-styling",
    title: "The Multi-Strap Method: Styling Top-Handle Bags with Interchangeable Webbing",
    slug: "top-handle-crossbody-double-strap-styling",
    category: "Handbag Styling",
    author: "Serena Moretti",
    authorRole: "Milanese Street-Style Photographer & Editor",
    authorAvatar: "assets/images/about/about-atelier.jpg",
    date: "October 08, 2026",
    readTime: "4 min read",
    image: "assets/images/products/handbags/handbag-4.jpg",
    tags: ["Top Handle", "Webbing Straps", "Versatility", "Street Style"],
    summary: "Transition a formal structured lady bag into casual urban streetwear by swapping rigid leather straps for woven Parisian jacquard guitar webbing.",
    content: `
      <p class="lead">The smartest investment in contemporary accessories is modularity. A single heritage top-handle bag can morph across three distinct aesthetics simply by rotating its shoulder strap.</p>
      <h2>1. The Commuter Webbing Strap</h2>
      <p>For mornings on the go, clip on a wide 50mm jacquard canvas strap. The wide weight distribution prevents shoulder fatigue while delivering an energetic, sporty street-style edge.</p>
      <h2>2. Evening Chain Link Conversion</h2>
      <p>When cocktail hour calls, detach the canvas strap and click into place a diamond-cut curb chain strap. The bag instantly pivots from utilitarian carryall to an intimate evening companion.</p>
    `
  },

  // ==========================================
  // Category 3: Shopping Guides (3 unique articles)
  // ==========================================
  {
    id: "tote-vs-satchel-daily-silhouette",
    title: "Tote vs. Satchel: Choosing the Right Daily Silhouette for Your Lifestyle",
    slug: "tote-vs-satchel-daily-silhouette",
    category: "Shopping Guides",
    author: "Elise Moreau",
    authorRole: "Editorial Fashion Director, Milan",
    authorAvatar: "assets/images/about/about-atelier.jpg",
    date: "October 12, 2026",
    readTime: "6 min read",
    image: "assets/images/blog/blog-3.jpg",
    tags: ["Shopping Guide", "Tote", "Satchel", "Workwear"],
    summary: "Compare capacity, weight distribution, interior organization, and styling versatility to decide whether a structured satchel or a spacious tote fits your daily rhythm.",
    content: `
      <p class="lead">The eternal debate between the open-top carryall tote and the structured top-handle satchel comes down to your personal cadence between spontaneous capacity and architectural discipline.</p>
      <h2>The Case for the Everyday Tote</h2>
      <p>The tote is the champion of expansive freedom. Whether carrying a 15-inch laptop, gym sneakers, a hardcover novel, or impromptu market purchases, the wide-mouth aperture welcomes everything with zero resistance.</p>
      <h2>The Elegance of the Structured Satchel</h2>
      <p>Conversely, the satchel commands immediate authority. Its defined lines, flap closure, and sculptural top handle exude curated composure.</p>
    `
  },
  {
    id: "investment-handbag-resale-value-guide",
    title: "Investment Bags 101: Which Leather Silhouettes Retain & Appreciate in Value",
    slug: "investment-handbag-resale-value-guide",
    category: "Shopping Guides",
    author: "Marc-Antoine Roche",
    authorRole: "Vintage Handbag Authenticator & Appraiser",
    authorAvatar: "assets/images/about/about-workshop.jpg",
    date: "September 30, 2026",
    readTime: "7 min read",
    image: "assets/images/products/totes/tote-2.jpg",
    tags: ["Investment Bags", "Resale Value", "Collector Guide", "Heirloom Quality"],
    summary: "A financial connoisseur's analysis of full-grain leather heritage bags, resale liquidity, auction trends, and lifetime heirloom longevity.",
    content: `
      <p class="lead">Certain handbags perform better than blue-chip equities on the secondary market. Learn the hallmarks of bags designed to retain 80% to 120% of their retail purchase price over a decade.</p>
      <h2>1. Full-Grain Vegetable Tanning vs. Coated Canvas</h2>
      <p>Coated canvas eventually cracks and cannot be restored. In contrast, full-grain vegetable-tanned calfskin heals micro-scratches with natural oil massage and develops a rich patina that secondary buyers actively covet.</p>
      <h2>2. Neutral Palette Dominance</h2>
      <p>While novelty neon hues experience rapid depreciation, classic heritage tones—Black box calf, Tan Cognac, and Deep Burgundy—command consistent demand across global auction houses.</p>
    `
  },
  {
    id: "laptop-work-bag-guide-for-executives",
    title: "The Executive Edit: Finding a Leather Work Bag That Fits a 15\" Laptop in Style",
    slug: "laptop-work-bag-guide-for-executives",
    category: "Shopping Guides",
    author: "François Beaumont",
    authorRole: "Architectural Bag Designer & Ergonomist",
    authorAvatar: "assets/images/about/about-craftsman.jpg",
    date: "September 18, 2026",
    readTime: "5 min read",
    image: "assets/images/products/backpacks/backpack-2.jpg",
    tags: ["Work Bags", "Laptop Bags", "Executive Style", "Organization"],
    summary: "Ditch nylon corporate backpacks. Discover refined full-grain leather totes and dual-compartment satchels engineered for tech devices and boardrooms.",
    content: `
      <p class="lead">The challenge of the executive handbag is reconciling technological utility with high-fashion restraint. A corporate bag should never betray the heavy hardware stored within.</p>
      <h2>1. Reinforced Base & Metal Protective Feet</h2>
      <p>A quality work bag must stand upright unassisted when placed beside your desk. Five solid brass bottom feet protect the calfskin base from moisture and scuffs in airport lounges and boardrooms.</p>
      <h2>2. Neoprene Padded Tech Dividers</h2>
      <p>Look for interior compartments lined with ultra-soft suede and shock-absorbing neoprene that cradle 14\" and 16\" laptops without requiring bulky external sleeves.</p>
    `
  },

  // ==========================================
  // Category 4: Bag Care Tips (3 unique articles)
  // ==========================================
  {
    id: "leather-bag-care-conditioning-guide",
    title: "The Ultimate Leather Bag Care: How to Clean, Condition & Protect Heirloom Bags",
    slug: "leather-bag-care-conditioning-guide",
    category: "Bag Care Tips",
    author: "Matteo Rossi",
    authorRole: "Master Artisan & Leather Conservator",
    authorAvatar: "assets/images/about/about-workshop.jpg",
    date: "October 18, 2026",
    readTime: "7 min read",
    image: "assets/images/blog/blog-2.jpg",
    tags: ["Bag Care", "Leather Maintenance", "Artisan Tips", "Longevity"],
    summary: "Learn authentic European atelier methods to preserve vegetable-tanned leather, prevent water spots, restore suppleness, and store handbags to maintain their architectural shape.",
    content: `
      <p class="lead">Full-grain leather is an organic material that breathes, matures, and reflects the life of its owner. With proper care and seasonal conditioning, a handcrafted handbag will easily outlive decades of trends and become an inherited treasure.</p>
      <h2>1. Understanding Your Leather Type</h2>
      <p>Before applying any balm or cleanser, determine your bag's finish. Saffiano leather features a protective wax cross-hatch coating that requires only a damp microfiber cloth.</p>
      <h2>2. The Quarterly Conditioning Ritual</h2>
      <p>Every three to four months, perform a thorough conditioning ritual using natural wax balm and buffing gently with a horsehair brush.</p>
    `
  },
  {
    id: "rain-water-spot-prevention-leather-bags",
    title: "Sudden Rainstorm Emergency: How to Save a Water-Spotted Leather Handbag",
    slug: "rain-water-spot-prevention-leather-bags",
    category: "Bag Care Tips",
    author: "Paolo De Luca",
    authorRole: "Leather Restoration Specialist & Conservator",
    authorAvatar: "assets/images/about/about-craftsman.jpg",
    date: "October 05, 2026",
    readTime: "4 min read",
    image: "assets/images/products/shoulder-bags/shoulder-3.jpg",
    tags: ["Rain Protection", "Water Spots", "Emergency Care", "Restoration"],
    summary: "Crucial first-aid steps when pure vegetable-tanned leather gets drenched: drying protocols, beeswax barriers, and gentle edge buffing.",
    content: `
      <p class="lead">Catching unexpected torrential rain with a luxury leather bag can cause heart-stopping panic. However, acting swiftly and properly prevents permanent water ring staining.</p>
      <h2>1. What You Must NEVER Do</h2>
      <p>Never apply a hair dryer, radiator heat, or direct oven warmth to soaked leather. Accelerated heat shrinks the protein collagen fibers, causing the leather to curl, harden, and crack irreversibly.</p>
      <h2>2. The Room-Temperature Evaporation Method</h2>
      <p>Gently blot (never rub) the surface with a lint-free cotton towel. Stuff the interior firmly with dry acid-free tissue paper to preserve internal structure, and let the bag dry naturally in a well-ventilated room.</p>
    `
  },
  {
    id: "brass-hardware-tarnish-removal-polishing",
    title: "Polishing 24K Gold & Solid Brass Hardware Without Staining Delicate Leather",
    slug: "brass-hardware-tarnish-removal-polishing",
    category: "Bag Care Tips",
    author: "Gianluigi Bellini",
    authorRole: "Master Saddle-Stitch Craftsman, Bologna",
    authorAvatar: "assets/images/about/about-workshop.jpg",
    date: "September 25, 2026",
    readTime: "5 min read",
    image: "assets/images/products/crossbody/crossbody-1.jpg",
    tags: ["Hardware Care", "24K Gold", "Brass Polishing", "Atelier Secrets"],
    summary: "How to safely buff micro-scratches from luxury clasp hardware, zipper teeth, and chain links using jeweler's rouge and archival shield tape.",
    content: `
      <p class="lead">Nothing revives the luster of an heirloom handbag like pristine metalwork. But chemical brass polishes can disastrously discolor surrounding vegetable-tanned leather if applied carelessly.</p>
      <h2>1. Protecting the Leather Perimeter</h2>
      <p>Before applying any cloth or paste, mask the leather immediately surrounding the lock clasp with low-tack painter's masking tape. This forms an impermeable barrier against polish residue.</p>
      <h2>2. Microfiber Jewelers' Cloths</h2>
      <p>Use dry, chemically impregnated jeweler's cloths rather than liquid metal polish. They deliver radiant high-luster shine on solid brass and gold plating with zero drippage risk.</p>
    `
  },

  // ==========================================
  // Category 5: Gift Ideas (3 unique articles)
  // ==========================================
  {
    id: "handbag-gift-ideas-for-her",
    title: "5 Unforgettable Handbag Gift Ideas: A Connoisseur’s Luxury Gift Guide",
    slug: "handbag-gift-ideas-for-her",
    category: "Gift Ideas",
    author: "Clara Fontaine",
    authorRole: "Luxury Gift Concierge & Personal Shopper",
    authorAvatar: "assets/images/about/about-atelier.jpg",
    date: "September 15, 2026",
    readTime: "5 min read",
    image: "assets/images/blog/blog-5.jpg",
    tags: ["Gift Guide", "Anniversary Gifts", "Luxury Gifting", "Bespoke"],
    summary: "From bespoke gold monogramming to matching silk scarf duos, explore thoughtfully curated leather gifts guaranteed to take her breath away on birthdays and anniversaries.",
    content: `
      <p class="lead">Gifting a luxury handbag is an intimate gesture that commemorates milestones, celebrates achievements, and offers everyday companionship for years to come.</p>
      <h2>1. The Monogrammed Heirloom Saddle Crossbody</h2>
      <p>Personalization elevates fine leather from a luxury product to an emotional keepsake. Having her initials embossed in subtle gold foil on the interior flap shows foresight and bespoke attention.</p>
      <h2>2. The Scarf & Satchel Duo</h2>
      <p>A classic top-handle satchel bundled with an 85cm hand-rolled Mulberry silk twilly scarf gives her instant styling versatility.</p>
    `
  },
  {
    id: "bridal-party-monogrammed-clutches-gifts",
    title: "Bridal Party Keepsakes: Personalized Monogrammed Clutches She Will Cherish",
    slug: "bridal-party-monogrammed-clutches-gifts",
    category: "Gift Ideas",
    author: "Geneviève Blanc",
    authorRole: "Bridal & Red Carpet Accessories Stylist",
    authorAvatar: "assets/images/about/about-craftsman.jpg",
    date: "October 22, 2026",
    readTime: "5 min read",
    image: "assets/images/products/clutches/clutch-4.jpg",
    tags: ["Bridal Gifts", "Bridesmaids", "Personalized Gifts", "Monogram"],
    summary: "Move beyond single-use wedding favors with bespoke silk-lined Italian nappa pouches hot-stamped with each bridesmaid's gilded initials.",
    content: `
      <p class="lead">Your bridesmaids stand beside you during life’s most momentous milestone. Express gratitude with a gift that transcends the wedding weekend and becomes a cherished staple of their evening wardrobe.</p>
      <h2>1. Personalized Monogramming</h2>
      <p>Hot-stamping each bridesmaid's initials in 24K gold foil inside the leather flap creates an heirloom piece they will proudly carry to galas and dinner dates for decades.</p>
      <h2>2. Coordinated Bridal Party Palettes</h2>
      <p>Choose complementary shades: Champagne Ivory for the maid of honor, Blush Petal and Soft Sage for the bridesmaids, creating breathtaking unity in wedding photography.</p>
    `
  },
  {
    id: "anniversary-leather-year-three-gift-guide",
    title: "The 3rd Anniversary Milestone: Why Handcrafted Leather Represents Lasting Devotion",
    slug: "anniversary-leather-year-three-gift-guide",
    category: "Gift Ideas",
    author: "Aurelia Visconti",
    authorRole: "Private Client Concierge, Via Montenapoleone",
    authorAvatar: "assets/images/about/about-workshop.jpg",
    date: "October 10, 2026",
    readTime: "5 min read",
    image: "assets/images/products/crossbody/crossbody-2.jpg",
    tags: ["3rd Anniversary", "Leather Anniversary", "Romantic Gifts", "Milestones"],
    summary: "Tradition dictates leather for the third wedding anniversary as a symbol of resilient, supple strength. Discover our most romantic heirloom pairings.",
    content: `
      <p class="lead">Centuries of tradition designate leather as the quintessential third wedding anniversary gift. Flexible yet virtually indestructible, it reflects a marriage that has weathered early challenges and grown richer with time.</p>
      <h2>1. The Romance of Patina</h2>
      <p>Vegetable-tanned leather darkens and softens over decades of touch. Every scratch tells a story; every outing deepens its luster, mirroring the shared journey of partnership.</p>
      <h2>2. Bundled Pairings</h2>
      <p>Pair an Italian calfskin tote with a matching continental wallet or leather passport cover for couples planning celebratory anniversary getaways.</p>
    `
  },

  // ==========================================
  // Category 6: New Collections (3 unique articles)
  // ==========================================
  {
    id: "spring-summer-2026-bag-color-trends",
    title: "Spring/Summer 2026 Handbag Color Trends: From Terracotta to Sage Mist",
    slug: "spring-summer-2026-bag-color-trends",
    category: "New Collections",
    author: "Chiara Vivaldi",
    authorRole: "Bespoke Colorist & Botanical Dye Chemist",
    authorAvatar: "assets/images/about/about-workshop.jpg",
    date: "September 04, 2026",
    readTime: "5 min read",
    image: "assets/images/blog/blog-6.jpg",
    tags: ["Color Trends", "Spring 2026", "Runway Edit", "New Arrivals"],
    summary: "An exclusive look at the natural mineral pigments and botanical dyes defining luxury leather goods this season, featuring warm terracotta, sage mist, and alabaster cream.",
    content: `
      <p class="lead">This season’s color story departs from harsh neons, returning to earthy mineral tones and botanical dyes extracted from walnut husks, sage leaves, and volcanic clay.</p>
      <h2>1. Terracotta Warmth</h2>
      <p>Reminiscent of sun-baked Tuscan rooftops, terracotta breathes warmth into tailored linen suits and crisp poplin shirts.</p>
      <h2>2. Sage Mist & Forest Accents</h2>
      <p>A serene, desaturated green that acts as a stealth neutral. Pairs impeccably with grey cashmere and brushed gold jewelry.</p>
    `
  },
  {
    id: "atelier-autumn-capsule-woven-lambskin",
    title: "The Autumn Salon Debut: Hand-Woven Lambskin Envelopes & Crescent Silhouettes",
    slug: "atelier-autumn-capsule-woven-lambskin",
    category: "New Collections",
    author: "Sébastien Fontaine",
    authorRole: "Heritage Leather Tanning Specialist",
    authorAvatar: "assets/images/about/about-craftsman.jpg",
    date: "October 26, 2026",
    readTime: "6 min read",
    image: "assets/images/products/handbags/handbag-1.jpg",
    tags: ["Autumn Capsule", "Intrecciato Weave", "Lambskin", "New Arrivals"],
    summary: "Step inside our Florence atelier as we unveil the Autumn/Winter capsule: artisanal intrecchiato weaving and sculptural crescent moon contours.",
    content: `
      <p class="lead">Autumn invites intimacy and touch. Our newly debuted capsule celebrates the master craft of seamless intrecchiato weaving, transforming delicate lambskin ribbons into supple leather tapestries.</p>
      <h2>1. Over Thirty Hours of Hand-Weaving Per Bag</h2>
      <p>Each leather strip is precision-beveled by hand before being interlaced without visible seams. The result is a bag that molds naturally to the curve of the body.</p>
      <h2>2. Deep Autumnal Tones</h2>
      <p>Featuring Midnight Espresso, Burnished Cognac, and Smoked Olive—colors inspired by autumnal walks along the banks of the Arno River.</p>
    `
  },
  {
    id: "limited-edition-24k-gold-hardware-capsule",
    title: "The Heritage Hardware Edition: Solid Brass Chiseled by Master Florentine Jewelers",
    slug: "limited-edition-24k-gold-hardware-capsule",
    category: "New Collections",
    author: "Nicolas Perrin",
    authorRole: "Travel Leatherware & Trunk Historian",
    authorAvatar: "assets/images/about/about-atelier.jpg",
    date: "October 16, 2026",
    readTime: "5 min read",
    image: "assets/images/products/shoulder-bags/shoulder-1.jpg",
    tags: ["Limited Edition", "24K Gold Hardware", "Fine Jewelry Craft", "Numbered Edition"],
    summary: "Only 50 pieces crafted worldwide: inspect the architectural padlock clasps hand-chiseled from solid jeweler's brass and immersed in 24K gold baths.",
    content: `
      <p class="lead">Where does high saddlery end and high jewelry begin? The Heritage Hardware Edition blurs these boundaries with bespoke lockwork designed in collaboration with Florentine goldsmiths.</p>
      <h2>1. Lost-Wax Casting Technique</h2>
      <p>Each lock body is cast in solid brass using Renaissance lost-wax molds, hand-chiseled with the Maison Vélure crest, and electro-plated with five microns of pure 24-karat gold.</p>
      <h2>2. Numbered Collector Certificates</h2>
      <p>Each bag in this limited series features a laser-engraved edition number (01/50 through 50/50) on an interior brass plate, accompanied by an artisan certificate.</p>
    `
  }
];

// Helper to look up a blog post by ID or slug
function getBlogPostById(id) {
  return BLOG_POSTS.find(p => p.id === id || p.slug === id) || BLOG_POSTS[0];
}

// Expose globally
if (typeof window !== "undefined") {
  window.BLOG_POSTS = BLOG_POSTS;
  window.getBlogPostById = getBlogPostById;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BLOG_POSTS, getBlogPostById };
}
