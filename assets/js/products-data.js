/**
 * Maison Vélure Paris — Central Handbag & Leather Goods Catalog
 * Complete, strictly categorized product catalog with unique images for every item.
 */
const PRODUCTS_DATA = [
  // --- TOTES ---
  {
    id: "tote-palermo",
    name: "Palermo Full-Grain Leather Work Tote",
    category: "totes",
    categoryLabel: "Totes & Shoppers",
    price: 345,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 84,
    badge: "Best Seller",
    image: "assets/images/products/totes/tote-1.jpg",
    gallery: [
      "assets/images/products/totes/tote-1.jpg",
      "assets/images/products/totes/tote-2.jpg",
      "assets/images/products/totes/tote-3.jpg",
      "assets/images/products/totes/tote-4.jpg"
    ],
    colors: [
      { name: "Cognac Tan", hex: "#8b4513" },
      { name: "Noir Onyx", hex: "#1c1c1c" },
      { name: "Bordeaux", hex: "#5a1827" }
    ],
    material: "Full-Grain Vegetable Tanned Tuscan Leather",
    dimensions: "38cm (W) x 30cm (H) x 14cm (D)",
    capacity: "Dedicated padded sleeve fits up to 15\" laptop, notebook, water bottle",
    hardware: "Solid brushed antique gold-plated brass",
    shortDesc: "The quintessential modern heirloom work tote. Hand-burnished edges, reinforced base feet, and seamless dual shoulder straps engineered for daily commutes.",
    description: "The Palermo Work Tote marries Florentine artisanal craftsmanship with urban functionality. Cut from the finest full-grain vegetable-tanned Tuscan calfskin, it develops a deep, lustrous patina with every passing season. Features an organized interior with a zippered central compartment, phone sleeve, key leash, and protective brass base studs.",
    isBestSeller: true,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: false
  },
  {
    id: "tote-siena",
    name: "Siena Canvas & Calfskin Shopper Tote",
    category: "totes",
    categoryLabel: "Totes & Shoppers",
    price: 280,
    originalPrice: 320,
    rating: 4.8,
    reviewsCount: 52,
    badge: "Trending",
    image: "assets/images/products/totes/tote-2.jpg",
    gallery: [
      "assets/images/products/totes/tote-2.jpg",
      "assets/images/products/totes/tote-1.jpg",
      "assets/images/products/totes/tote-3.jpg",
      "assets/images/products/totes/tote-4.jpg"
    ],
    colors: [
      { name: "Natural Ecru / Saddle", hex: "#d8c4b6" },
      { name: "Navy Blue / Cognac", hex: "#1a2c42" }
    ],
    material: "Heavyweight 24oz Organic Cotton Canvas with French Box Calf Trim",
    dimensions: "42cm (W) x 32cm (H) x 16cm (D)",
    capacity: "Spacious weekender volume, market farmer finds, magazine, beach essentials",
    hardware: "Polished champagne gold hardware",
    shortDesc: "Effortless French Riviera chic. Heavyweight organic cotton canvas reinforced with supple box-calf leather handles and bottom corners.",
    description: "Designed for sun-drenched European weekends and city market strolls, the Siena Shopper balances airy canvas with structured calfskin accents. Water-resistant wax treatment protects the exterior, while an internal leather zip pocket secures essentials.",
    isBestSeller: false,
    isTrending: true,
    isNew: true,
    featuredHome1: false,
    featuredHome2: true
  },
  {
    id: "tote-verona",
    name: "Verona Structured Saffiano Executive Tote",
    category: "totes",
    categoryLabel: "Totes & Shoppers",
    price: 395,
    originalPrice: 460,
    rating: 5.0,
    reviewsCount: 46,
    badge: "New",
    image: "assets/images/products/totes/tote-3.jpg",
    gallery: [
      "assets/images/products/totes/tote-3.jpg",
      "assets/images/products/totes/tote-1.jpg",
      "assets/images/products/totes/tote-2.jpg",
      "assets/images/products/totes/tote-4.jpg"
    ],
    colors: [
      { name: "Midnight Black", hex: "#111111" },
      { name: "Slate Grey", hex: "#5c6269" },
      { name: "Emerald Pine", hex: "#1c3b2b" }
    ],
    material: "Cross-Hatch Textured Saffiano Italian Calf Leather",
    dimensions: "36cm (W) x 28cm (H) x 13cm (D)",
    capacity: "Fits iPad Pro 12.9\", planner, makeup pouch, water bottle",
    hardware: "Mirror-finish palladium hardware",
    shortDesc: "Impeccably sharp geometry with scratch-resistant Saffiano finish. Retains its majestic silhouette standing tall in boardrooms and airport lounges.",
    description: "Built for high-achieving elegance, the Verona Tote utilizes cross-grain embossed Saffiano leather impervious to scratches and light rain. Three distinct inner compartments ensure precision organization for the modern executive.",
    isBestSeller: false,
    isTrending: false,
    isNew: true,
    featuredHome1: true,
    featuredHome2: true
  },
  {
    id: "tote-amalfi",
    name: "Amalfi Slouchy Pebbled Carryall Tote",
    category: "totes",
    categoryLabel: "Totes & Shoppers",
    price: 310,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 39,
    badge: "",
    image: "assets/images/products/totes/tote-4.jpg",
    gallery: [
      "assets/images/products/totes/tote-4.jpg",
      "assets/images/products/totes/tote-1.jpg",
      "assets/images/products/totes/tote-2.jpg",
      "assets/images/products/totes/tote-3.jpg"
    ],
    colors: [
      { name: "Warm Biscuit", hex: "#c9a683" },
      { name: "Olive Green", hex: "#556b2f" }
    ],
    material: "Soft-Grained Italian Milled Nappa Leather",
    dimensions: "40cm (W) x 34cm (H) x 15cm (D)",
    capacity: "Generous unlined slouch capacity with removable zip organizer pouch",
    hardware: "Concealed magnetic clasp closure",
    shortDesc: "Buttery-soft pebbled calfskin that drapes gracefully over the shoulder. Minimalist luxury at its most tactile.",
    description: "The Amalfi Carryall is an ode to relaxed luxury. Its supple pebbled texture conforms effortlessly against your body, offering all-day comfort whether traveling or running errands.",
    isBestSeller: false,
    isTrending: false,
    isNew: false,
    featuredHome1: false,
    featuredHome2: false
  },

  // --- CLUTCHES ---
  {
    id: "clutch-vendome",
    name: "Vendome Velvet Gold-Clasp Evening Clutch",
    category: "clutches",
    categoryLabel: "Evening Clutches",
    price: 240,
    originalPrice: 290,
    rating: 4.9,
    reviewsCount: 63,
    badge: "Trending",
    image: "assets/images/products/clutches/clutch-1.jpg",
    gallery: [
      "assets/images/products/clutches/clutch-1.jpg",
      "assets/images/products/clutches/clutch-2.jpg",
      "assets/images/products/clutches/clutch-3.jpg",
      "assets/images/products/clutches/clutch-4.jpg"
    ],
    colors: [
      { name: "Burgundy Velvet", hex: "#4a0e17" },
      { name: "Midnight Navy Velvet", hex: "#0f1c3f" },
      { name: "Obsidian Black Velvet", hex: "#141414" }
    ],
    material: "Silk Velvet with Silk Crepe Lining & Polished Brass Frame",
    dimensions: "24cm (W) x 14cm (H) x 5cm (D)",
    capacity: "Fits iPhone 15 Pro Max, compact mirror, lipstick, cardholder",
    hardware: "Sculpted jewel kiss-lock clasp in 24k gold tone",
    shortDesc: "A timeless black-tie companion. Sumptuous silk velvet crowned with a sculpted gold-tone jewel closure and detachable serpentine chain.",
    description: "Grace galas, red carpet events, and moonlit opera nights with the Vendome Clutch. The heirloom clasp clicks with satisfying weight, while the convertible gold chain strap offers hands-free champagne sipping.",
    isBestSeller: true,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: true
  },
  {
    id: "clutch-monaco",
    name: "Monaco Metallic Box Minaudière",
    category: "clutches",
    categoryLabel: "Evening Clutches",
    price: 295,
    originalPrice: 350,
    rating: 4.8,
    reviewsCount: 41,
    badge: "New",
    image: "assets/images/products/clutches/clutch-2.jpg",
    gallery: [
      "assets/images/products/clutches/clutch-2.jpg",
      "assets/images/products/clutches/clutch-1.jpg",
      "assets/images/products/clutches/clutch-3.jpg",
      "assets/images/products/clutches/clutch-4.jpg"
    ],
    colors: [
      { name: "Champagne Shimmer", hex: "#e5d3b3" },
      { name: "Liquid Silver", hex: "#d8d8d8" }
    ],
    material: "Hand-Hammered Metallic Foil Leather on Hard Acrylic Shell",
    dimensions: "19cm (W) x 11cm (H) x 4.5cm (D)",
    capacity: "Cards, keys, mints, lipstick, folded currency",
    hardware: "Magnetic faceted gem lock",
    shortDesc: "Architectural jewel box minaudière with high-reflective metallic texture that catches evening ambient chandeliers.",
    description: "The Monaco Minaudière commands attention at every soiree. The rigid hard-case construction ensures delicate cosmetics are completely shielded while shimmering like liquid gold under gala lights.",
    isBestSeller: false,
    isTrending: false,
    isNew: true,
    featuredHome1: false,
    featuredHome2: true
  },
  {
    id: "clutch-capri",
    name: "Capri Woven Gold-Clasp Envelope Clutch",
    category: "clutches",
    categoryLabel: "Evening Clutches",
    price: 215,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 35,
    badge: "",
    image: "assets/images/products/clutches/clutch-3.jpg",
    gallery: [
      "assets/images/products/clutches/clutch-3.jpg",
      "assets/images/products/clutches/clutch-1.jpg",
      "assets/images/products/clutches/clutch-2.jpg",
      "assets/images/products/clutches/clutch-4.jpg"
    ],
    colors: [
      { name: "Gilded Sand", hex: "#d2b48c" },
      { name: "Ivory Cream", hex: "#f8f5ef" }
    ],
    material: "Intrecciato Hand-Woven Lambskin Leather",
    dimensions: "26cm (W) x 16cm (H) x 3.5cm (D)",
    capacity: "Smartphone, sunglasses, keys, card case",
    hardware: "Concealed magnetic envelope flap",
    shortDesc: "Intricate hand-woven leather chevron texture with an envelope silhouette. Perfect for destination weddings and cocktail hour.",
    description: "Master artisans spend eight hours hand-weaving lambskin strips to create the Capri Envelope Clutch. Soft in hand yet structured when tucked under the arm.",
    isBestSeller: false,
    isTrending: false,
    isNew: false,
    featuredHome1: false,
    featuredHome2: false
  },
  {
    id: "clutch-belgravia",
    name: "Belgravia Pleated Satin Wristlet Pouch",
    category: "clutches",
    categoryLabel: "Evening Clutches",
    price: 185,
    originalPrice: 220,
    rating: 4.8,
    reviewsCount: 29,
    badge: "Best Seller",
    image: "assets/images/products/clutches/clutch-4.jpg",
    gallery: [
      "assets/images/products/clutches/clutch-4.jpg",
      "assets/images/products/clutches/clutch-1.jpg",
      "assets/images/products/clutches/clutch-2.jpg",
      "assets/images/products/clutches/clutch-3.jpg"
    ],
    colors: [
      { name: "Pearl Blush", hex: "#f4e0db" },
      { name: "Emerald Silk", hex: "#0c3b2e" }
    ],
    material: "Heavy Silk Duchess Satin with Calfskin Wristlet",
    dimensions: "22cm (W) x 13cm (H) x 6cm (D)",
    capacity: "Evening cosmetics, phone, cards, passport",
    hardware: "Grosgrain zipper with pearlized puller",
    shortDesc: "Delicate fan pleats framed with satin sheen. Includes a detachable calfskin wrist strap for secure, relaxed carrying.",
    description: "The Belgravia pouch takes inspiration from 1950s Parisian couture. The accordion fan folds expand gently to accommodate all evening essentials without losing form.",
    isBestSeller: false,
    isTrending: true,
    isNew: false,
    featuredHome1: false,
    featuredHome2: true
  },

  // --- BACKPACKS ---
  {
    id: "backpack-milanese",
    name: "Milanese Commuter Leather Backpack",
    category: "backpacks",
    categoryLabel: "Backpacks",
    price: 360,
    originalPrice: 430,
    rating: 4.9,
    reviewsCount: 97,
    badge: "Best Seller",
    image: "assets/images/products/backpacks/backpack-1.jpg",
    gallery: [
      "assets/images/products/backpacks/backpack-1.jpg",
      "assets/images/products/backpacks/backpack-2.jpg",
      "assets/images/products/backpacks/backpack-3.jpg",
      "assets/images/products/backpacks/backpack-4.jpg"
    ],
    colors: [
      { name: "Espresso Brown", hex: "#3b2219" },
      { name: "Matte Black", hex: "#1e1e1e" }
    ],
    material: "Full-Grain Saddle Cowhide Leather with Breathable Mesh Backing",
    dimensions: "30cm (W) x 40cm (H) x 15cm (D)",
    capacity: "Dedicated shock-absorbing 15.6\" laptop compartment, documents, water flask",
    hardware: "Two-way waterproof matte black metal zippers",
    shortDesc: "A masterpiece of commuter ergonomics. Sleek Italian leather shell with cushioned ergonomic straps and luggage trolley sleeve.",
    description: "Transition smoothly from high-speed train to executive presentation with the Milanese Backpack. Features hidden anti-theft passport pocket on the back panel, integrated key clip, and padded shoulder contours.",
    isBestSeller: true,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: false
  },
  {
    id: "backpack-alpine",
    name: "Alpine Full-Grain Heritage Daypack",
    category: "backpacks",
    categoryLabel: "Backpacks",
    price: 385,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 44,
    badge: "Trending",
    image: "assets/images/products/backpacks/backpack-2.jpg",
    gallery: [
      "assets/images/products/backpacks/backpack-2.jpg",
      "assets/images/products/backpacks/backpack-1.jpg",
      "assets/images/products/backpacks/backpack-3.jpg",
      "assets/images/products/backpacks/backpack-4.jpg"
    ],
    colors: [
      { name: "Vintage Chestnut", hex: "#63391b" },
      { name: "Olive Leather", hex: "#4b5320" }
    ],
    material: "Vegetable-Tanned Saddle Pull-Up Leather",
    dimensions: "28cm (W) x 38cm (H) x 14cm (D)",
    capacity: "14\" laptop or tablet, camera, sweater, journal",
    hardware: "Hand-cast brass roller buckles and speed-pin magnetic snaps",
    shortDesc: "Rustic Alpine elegance meets modern leather tailoring. Dual front bellows pockets and rugged saddle leather that ages with character.",
    description: "The Alpine Heritage Daypack draws inspiration from vintage mountaineering gear, elevated through pure Italian craftsmanship. The pull-up leather shows natural grain variations, deepening in beauty with every journey.",
    isBestSeller: false,
    isTrending: true,
    isNew: false,
    featuredHome1: false,
    featuredHome2: true
  },
  {
    id: "backpack-sorrento",
    name: "Sorrento Minimalist City Backpack",
    category: "backpacks",
    categoryLabel: "Backpacks",
    price: 320,
    originalPrice: 375,
    rating: 4.7,
    reviewsCount: 38,
    badge: "New",
    image: "assets/images/products/backpacks/backpack-3.jpg",
    gallery: [
      "assets/images/products/backpacks/backpack-3.jpg",
      "assets/images/products/backpacks/backpack-1.jpg",
      "assets/images/products/backpacks/backpack-2.jpg",
      "assets/images/products/backpacks/backpack-4.jpg"
    ],
    colors: [
      { name: "Caramel Honey", hex: "#b36b21" },
      { name: "Charcoal Ash", hex: "#363636" }
    ],
    material: "Fine-Grained Box Calf Leather with Microsuede Lining",
    dimensions: "26cm (W) x 34cm (H) x 12cm (D)",
    capacity: "13\" MacBook Air, iPad, water bottle, makeup kit",
    hardware: "Brushed pale gold zipper and strap adjusters",
    shortDesc: "Pure geometric minimalism. Seamless dome silhouette with concealed zip tracks and ultra-comfortable slim leather straps.",
    description: "The Sorrento City Backpack is crafted for urban tastemakers who desire hands-free convenience without compromising high-fashion aesthetics. The structured dome shape never collapses.",
    isBestSeller: false,
    isTrending: false,
    isNew: true,
    featuredHome1: true,
    featuredHome2: false
  },
  {
    id: "backpack-geneva",
    name: "Geneva Quilted Leather Mini Pack",
    category: "backpacks",
    categoryLabel: "Backpacks",
    price: 275,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 61,
    badge: "",
    image: "assets/images/products/backpacks/backpack-4.jpg",
    gallery: [
      "assets/images/products/backpacks/backpack-4.jpg",
      "assets/images/products/backpacks/backpack-1.jpg",
      "assets/images/products/backpacks/backpack-2.jpg",
      "assets/images/products/backpacks/backpack-3.jpg"
    ],
    colors: [
      { name: "Caviar Black", hex: "#161616" },
      { name: "Cream Ivory", hex: "#eee8df" }
    ],
    material: "Diamond-Quilted Lambskin with Leather-Braided Gold Chain Straps",
    dimensions: "21cm (W) x 25cm (H) x 10cm (D)",
    capacity: "Small essentials, wallet, phone, sunglasses case",
    hardware: "24k gold-tone turnlock front pocket & chain straps",
    shortDesc: "Playful haute couture mini backpack. Luxurious diamond quilting paired with convertible chain straps that allow shoulder or backpack wear.",
    description: "Equal parts casual and opulent, the Geneva Mini Pack bridges streetwear and runway glam. The straps can be clipped as dual backpack straps or joined as a single crossbody sling.",
    isBestSeller: false,
    isTrending: false,
    isNew: false,
    featuredHome1: false,
    featuredHome2: true
  },

  // --- SHOULDER BAGS ---
  {
    id: "shoulder-saint-germain",
    name: "Saint-Germain Baguette Shoulder Bag",
    category: "shoulder-bags",
    categoryLabel: "Shoulder Bags",
    price: 290,
    originalPrice: 340,
    rating: 5.0,
    reviewsCount: 112,
    badge: "Trending",
    image: "assets/images/products/shoulder-bags/shoulder-1.jpg",
    gallery: [
      "assets/images/products/shoulder-bags/shoulder-1.jpg",
      "assets/images/products/shoulder-bags/shoulder-2.jpg",
      "assets/images/products/shoulder-bags/shoulder-3.jpg",
      "assets/images/products/shoulder-bags/shoulder-4.jpg"
    ],
    colors: [
      { name: "Cognac Amber", hex: "#9a4e21" },
      { name: "Jet Noir", hex: "#101010" },
      { name: "Sage Mist", hex: "#8a9a86" }
    ],
    material: "Semi-Gloss Glazed Calfskin Leather",
    dimensions: "27cm (W) x 14cm (H) x 7cm (D)",
    capacity: "Phone, cardholder, keys, sunglasses, compact",
    hardware: "Polished sculptural gold buckle",
    shortDesc: "The Paris ‘It-Girl’ silhouette. Sleek 90s-inspired elongated baguette proportion designed to rest snug under the arm.",
    description: "The Saint-Germain Baguette is our tribute to effortless Parisian style. Featuring a tapered leather strap with an arch curved to sit securely on your shoulder over wool coats or summer slip dresses.",
    isBestSeller: true,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: true
  },
  {
    id: "shoulder-riviera",
    name: "Riviera Quilted Chain Shoulder Flap",
    category: "shoulder-bags",
    categoryLabel: "Shoulder Bags",
    price: 380,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 78,
    badge: "Best Seller",
    image: "assets/images/products/shoulder-bags/shoulder-2.jpg",
    gallery: [
      "assets/images/products/shoulder-bags/shoulder-2.jpg",
      "assets/images/products/shoulder-bags/shoulder-1.jpg",
      "assets/images/products/shoulder-bags/shoulder-3.jpg",
      "assets/images/products/shoulder-bags/shoulder-4.jpg"
    ],
    colors: [
      { name: "Midnight Navy", hex: "#141c30" },
      { name: "Alabaster White", hex: "#f3efe6" }
    ],
    material: "Pebbled French Calf Leather with Diamond Quilting",
    dimensions: "28cm (W) x 18cm (H) x 8cm (D)",
    capacity: "Wallet, phone, cosmetics, keys, small journal",
    hardware: "Heavyweight sliding double gold curb chain & turnlock",
    shortDesc: "The quintessential luxury flap bag. Sliding curb chain doubles for shoulder wear or extends long for crossbody versatility.",
    description: "The Riviera Flap Bag exudes timeless sophistication. Each diamond quilt square is individually padded, and the dual-compartment interior features a hidden secret slip pocket behind the rear flap.",
    isBestSeller: true,
    isTrending: false,
    isNew: false,
    featuredHome1: true,
    featuredHome2: true
  },
  {
    id: "shoulder-crescent",
    name: "Crescent Moon Slouchy Shoulder Hobo",
    category: "shoulder-bags",
    categoryLabel: "Shoulder Bags",
    price: 310,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 47,
    badge: "New",
    image: "assets/images/products/shoulder-bags/shoulder-3.jpg",
    gallery: [
      "assets/images/products/shoulder-bags/shoulder-3.jpg",
      "assets/images/products/shoulder-bags/shoulder-1.jpg",
      "assets/images/products/shoulder-bags/shoulder-2.jpg",
      "assets/images/products/shoulder-bags/shoulder-4.jpg"
    ],
    colors: [
      { name: "Olive Moss", hex: "#4e533b" },
      { name: "Warm Taupe", hex: "#8b7d70" }
    ],
    material: "Ultra-Supple Washed Lambskin with Organic Suede Lining",
    dimensions: "32cm (W) x 22cm (H) x 9cm (D)",
    capacity: "Medium essentials, iPad Mini, small water flask",
    hardware: "Magnetic hidden closure with gold ring accents",
    shortDesc: "Sculptural half-moon curve that hugs the waist and torso. Soft-grain lambskin with a fluid, organic drape.",
    description: "The Crescent Hobo is modern casual luxury realized. Seamless edge painting and feather-light weight make it an absolute joy to carry from morning espresso to midnight jazz clubs.",
    isBestSeller: false,
    isTrending: true,
    isNew: true,
    featuredHome1: false,
    featuredHome2: true
  },
  {
    id: "shoulder-atelier",
    name: "Atelier Vintage Brass Flap Bag",
    category: "shoulder-bags",
    categoryLabel: "Shoulder Bags",
    price: 340,
    originalPrice: 390,
    rating: 4.7,
    reviewsCount: 33,
    badge: "",
    image: "assets/images/products/shoulder-bags/shoulder-4.jpg",
    gallery: [
      "assets/images/products/shoulder-bags/shoulder-4.jpg",
      "assets/images/products/shoulder-bags/shoulder-1.jpg",
      "assets/images/products/shoulder-bags/shoulder-2.jpg",
      "assets/images/products/shoulder-bags/shoulder-3.jpg"
    ],
    colors: [
      { name: "Oxblood Leather", hex: "#4a1525" },
      { name: "Vintage Oak", hex: "#59371e" }
    ],
    material: "Full-Grain Oiled Bridle Leather",
    dimensions: "25cm (W) x 19cm (H) x 8cm (D)",
    capacity: "Everyday essentials, wallet, keys, phone, spectacles",
    hardware: "Antiqued solid brass tongue clasp",
    shortDesc: "Nostalgic mid-century equestrian heritage. Heavy gauge saddle stitching and antique brass tongue hardware that snaps shut with precision.",
    description: "Constructed using heavyweight bridle leather sourced from historic European tanneries, the Atelier Flap Bag is built to endure decades and become an inherited treasure.",
    isBestSeller: false,
    isTrending: false,
    isNew: false,
    featuredHome1: false,
    featuredHome2: false
  },

  // --- CROSSBODY BAGS ---
  {
    id: "crossbody-montmartre",
    name: "Montmartre Saddle Leather Crossbody",
    category: "crossbody",
    categoryLabel: "Crossbody Bags",
    price: 270,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 104,
    badge: "Best Seller",
    image: "assets/images/products/crossbody/crossbody-1.jpg",
    gallery: [
      "assets/images/products/crossbody/crossbody-1.jpg",
      "assets/images/products/crossbody/crossbody-2.jpg",
      "assets/images/products/crossbody/crossbody-3.jpg",
      "assets/images/products/crossbody/crossbody-4.jpg"
    ],
    colors: [
      { name: "Cognac Brown", hex: "#884b25" },
      { name: "Pitch Black", hex: "#111111" },
      { name: "Forest Green", hex: "#1e3827" }
    ],
    material: "Hand-Waxed Tuscan Saddle Calfskin",
    dimensions: "23cm (W) x 18cm (H) x 7.5cm (D)",
    capacity: "Phone, card case, sunglasses, lip balm, passport",
    hardware: "Stirrup-shaped solid brass hardware with 7-hole adjustable strap",
    shortDesc: "Our most coveted crossbody. Signature horseshoe silhouette with contrast hand-stitching and curved front flap.",
    description: "The Montmartre Saddle Crossbody balances utilitarian ease with artisanal refinement. The contoured base sits comfortably against the hip, while the strap adjusts for wear across high chests or lower hips.",
    isBestSeller: true,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: false
  },
  {
    id: "crossbody-kyoto",
    name: "Kyoto Compact Boxy Camera Crossbody",
    category: "crossbody",
    categoryLabel: "Crossbody Bags",
    price: 245,
    originalPrice: 285,
    rating: 4.8,
    reviewsCount: 65,
    badge: "Trending",
    image: "assets/images/products/crossbody/crossbody-2.jpg",
    gallery: [
      "assets/images/products/crossbody/crossbody-2.jpg",
      "assets/images/products/crossbody/crossbody-1.jpg",
      "assets/images/products/crossbody/crossbody-3.jpg",
      "assets/images/products/crossbody/crossbody-4.jpg"
    ],
    colors: [
      { name: "Chalk Cream", hex: "#ede8df" },
      { name: "Burgundy Wine", hex: "#561421" }
    ],
    material: "Pebble-Grained Scratch-Proof Cowhide",
    dimensions: "21cm (W) x 15cm (H) x 7cm (D)",
    capacity: "Compact mirrorless camera or phone, power bank, wallet, keys",
    hardware: "Dual wrap-around top zip in polished gold",
    shortDesc: "The ultimate globe-trotter camera bag. Dual perimeter zippers grant wide visibility into the microfiber-lined interior.",
    description: "Designed for effortless travels and urban exploration. Features an exterior magnetic slip pocket on the rear for quick phone access without unzipping.",
    isBestSeller: false,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: true
  },
  {
    id: "crossbody-tuscan",
    name: "Tuscan Croc-Embossed Mini Crossbody Flap",
    category: "crossbody",
    categoryLabel: "Crossbody Bags",
    price: 260,
    originalPrice: 310,
    rating: 4.8,
    reviewsCount: 42,
    badge: "New",
    image: "assets/images/products/crossbody/crossbody-3.jpg",
    gallery: [
      "assets/images/products/crossbody/crossbody-3.jpg",
      "assets/images/products/crossbody/crossbody-1.jpg",
      "assets/images/products/crossbody/crossbody-2.jpg",
      "assets/images/products/crossbody/crossbody-4.jpg"
    ],
    colors: [
      { name: "Bordeaux Wine", hex: "#4a1525" },
      { name: "Noir Onyx", hex: "#111111" }
    ],
    material: "Embossed Croc-Pattern Italian Calfskin with Microfiber Suede Lining",
    dimensions: "20cm (W) x 16cm (H) x 6cm (D)",
    capacity: "Phone, keys, credit card sleeve, lipgloss, compact mirror",
    hardware: "Architectural geometric gold clasp with convertible strap",
    shortDesc: "Sculpted Italian croc-embossed calfskin with an exquisite geometric jewel clasp. Carries essentials with dramatic flair.",
    description: "A compact masterpiece of Florentine leatherwork. Featuring rich croc-embossed calf leather, an architectural gold clasp, and a structured silhouette that transitions effortlessly from gallery strolls to evening cocktails.",
    isBestSeller: false,
    isTrending: false,
    isNew: true,
    featuredHome1: false,
    featuredHome2: true
  },
  {
    id: "crossbody-roma",
    name: "Roma Convertible Chain Crossbody",
    category: "crossbody",
    categoryLabel: "Crossbody Bags",
    price: 295,
    originalPrice: 350,
    rating: 4.9,
    reviewsCount: 56,
    badge: "",
    image: "assets/images/products/crossbody/crossbody-4.jpg",
    gallery: [
      "assets/images/products/crossbody/crossbody-4.jpg",
      "assets/images/products/crossbody/crossbody-1.jpg",
      "assets/images/products/crossbody/crossbody-2.jpg",
      "assets/images/products/crossbody/crossbody-3.jpg"
    ],
    colors: [
      { name: "Onyx Black", hex: "#151515" },
      { name: "Emerald Glaze", hex: "#124231" }
    ],
    material: "Croc-Embossed Gloss Calfskin Leather",
    dimensions: "22cm (W) x 14cm (H) x 6.5cm (D)",
    capacity: "Evening essentials, cards, smartphone, lipstick",
    hardware: "Signature V-Monogram twist lock in 24k polished gold",
    shortDesc: "High-impact croc-embossed calfskin with jewelry-grade curb chain and our signature Maison Vélure V-monogram clasp.",
    description: "The Roma Crossbody is an unapologetic statement piece. The lustrous crocodile embossing adds rich depth to cocktail attire, while the interior card slots eliminate the need for a separate wallet.",
    isBestSeller: false,
    isTrending: false,
    isNew: false,
    featuredHome1: false,
    featuredHome2: false
  },

  // --- HANDBAGS / SATCHELS ---
  {
    id: "handbag-regency",
    name: "Regency Top-Handle Trapezoid Handbag",
    category: "handbags",
    categoryLabel: "Handbags & Satchels",
    price: 450,
    originalPrice: 520,
    rating: 5.0,
    reviewsCount: 89,
    badge: "Best Seller",
    image: "assets/images/products/handbags/handbag-1.jpg",
    gallery: [
      "assets/images/products/handbags/handbag-1.jpg"
    ],
    colors: [
      { name: "Royal Noir", hex: "#111111" },
      { name: "Cognac Imperial", hex: "#7a3e1d" },
      { name: "Porcelain Cream", hex: "#f0ece1" }
    ],
    material: "Full-Grain French Box Calfskin with Lambskin Lining",
    dimensions: "31cm (W) x 23cm (H) x 12cm (D)",
    capacity: "iPad 10.2\", continental wallet, cosmetic pouch, phone",
    hardware: "Custom engraved padlock & key clochette in 24k gold",
    shortDesc: "The pinnacle of ladylike poise. Architectural trapezoidal silhouette with sculpted top handle and detachable shoulder strap.",
    description: "The Regency Satchel represents over 24 hours of hand-cutting, saddle stitching, and seven coats of hand-painted edge lacquer. Fitted with our iconic working brass padlock and clochette.",
    isBestSeller: true,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: true
  },
  {
    id: "handbag-duchess",
    name: "Duchess Structured Leather Satchel",
    category: "handbags",
    categoryLabel: "Handbags & Satchels",
    price: 410,
    originalPrice: 480,
    rating: 4.8,
    reviewsCount: 71,
    badge: "Trending",
    image: "assets/images/products/handbags/handbag-2.jpg",
    gallery: [
      "assets/images/products/handbags/handbag-2.jpg"
    ],
    colors: [
      { name: "Bordeaux Burgundy", hex: "#521422" },
      { name: "Dark Camel", hex: "#a47449" }
    ],
    material: "Rigid Tuscan Saddle Cowhide with Microfiber Suede Lining",
    dimensions: "29cm (W) x 21cm (H) x 11cm (D)",
    capacity: "Daily essentials, small planner, phone, keys, makeup pouch",
    hardware: "Arched metal bridge handle mounts and front latch clasp",
    shortDesc: "Regal geometry with a modern voice. Structured flap design that stands upright effortlessly on its protective base studs.",
    description: "Tailored for the woman of distinction, the Duchess Satchel pairs clean lines with rich heritage leathers. Includes an adjustable leather strap for shoulder or crossbody carrying.",
    isBestSeller: false,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: false
  },
  {
    id: "handbag-bellagio",
    name: "Bellagio Doctor Frame Handbag",
    category: "handbags",
    categoryLabel: "Handbags & Satchels",
    price: 395,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 37,
    badge: "New",
    image: "assets/images/products/handbags/handbag-3.jpg",
    gallery: [
      "assets/images/products/handbags/handbag-3.jpg"
    ],
    colors: [
      { name: "Espresso Croc", hex: "#321d15" },
      { name: "Chestnut Tan", hex: "#7d4826" }
    ],
    material: "Glazed Mock-Croc Italian Calfskin with Metal Internal Frame",
    dimensions: "33cm (W) x 22cm (H) x 14cm (D)",
    capacity: "Spacious doctor bag opening reveals entire interior at a glance",
    hardware: "Hinged frame top closure with twin gold push buttons",
    shortDesc: "Vintage mid-century doctor bag reinterpreted. The hinged frame opens wide with a dramatic snap, revealing a cavernous interior.",
    description: "The Bellagio Frame Bag brings old-world romantic travel into modern everyday life. No more digging in deep bags; the frame stays securely open until clicked shut.",
    isBestSeller: false,
    isTrending: false,
    isNew: true,
    featuredHome1: false,
    featuredHome2: true
  },
  {
    id: "handbag-couture",
    name: "Couture Pleated Top-Handle Bag",
    category: "handbags",
    categoryLabel: "Handbags & Satchels",
    price: 370,
    originalPrice: 425,
    rating: 4.7,
    reviewsCount: 45,
    badge: "",
    image: "assets/images/products/handbags/handbag-4.jpg",
    gallery: [
      "assets/images/products/handbags/handbag-4.jpg"
    ],
    colors: [
      { name: "Alabaster Pearl", hex: "#eee9df" },
      { name: "Rose Quartz", hex: "#d9a59f" }
    ],
    material: "Soft Milled Nappa Leather with Hand-Pleated Front Panel",
    dimensions: "28cm (W) x 20cm (H) x 10cm (D)",
    capacity: "Wallet, sunglasses, phone, keys, lipstick",
    hardware: "Sculptural twisted gold handle and magnetic flap",
    shortDesc: "Sculptural pleats that flow like haute couture silk. Features an organic twisted metal top handle for statement arrivals.",
    description: "The Couture Pleated Bag is modern wearable art. Crafted from cloud-soft Nappa leather, it adds feminine romance to tailored blazers and trench coats.",
    isBestSeller: false,
    isTrending: false,
    isNew: false,
    featuredHome1: false,
    featuredHome2: false
  },

  // --- WALLETS & PURSES ---
  {
    id: "wallet-saffiano-continental",
    name: "Saffiano Continental Zip-Around Wallet",
    category: "wallets",
    categoryLabel: "Wallets & Small Leather Goods",
    price: 135,
    originalPrice: 165,
    rating: 4.9,
    reviewsCount: 138,
    badge: "Best Seller",
    image: "assets/images/products/wallets/wallet-1.jpg",
    gallery: [
      "assets/images/products/wallets/wallet-1.jpg",
      "assets/images/products/wallets/wallet-2.jpg",
      "assets/images/products/extras/bag-extra-3.jpg",
      "assets/images/products/wallets/wallet-4.jpg"
    ],
    colors: [
      { name: "Classic Noir", hex: "#1a1a1a" },
      { name: "Scarlet Red", hex: "#8c1d27" },
      { name: "Powder Pink", hex: "#e8c2ba" }
    ],
    material: "Scratch-Proof Saffiano Calfskin with RFID Protection Shield",
    dimensions: "19.5cm (W) x 10cm (H) x 2.5cm (D)",
    capacity: "12 credit card slots, central zip coin pocket, 3 bill compartments, fits iPhone",
    hardware: "Full perimeter gold metal zipper with leather pull",
    shortDesc: "The quintessential continental organizer. 12 card slots, dual full-length cash slots, and built-in RFID blocking fabric.",
    description: "Keep cards, international currencies, and boarding passes in pristine order. The durable Saffiano finish resists scratches from keys and makeup in your handbag.",
    isBestSeller: true,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: false
  },
  {
    id: "wallet-atelier-bifold",
    name: "Atelier Slim Bifold Pocket Wallet",
    category: "wallets",
    categoryLabel: "Wallets & Small Leather Goods",
    price: 95,
    originalPrice: 120,
    rating: 4.8,
    reviewsCount: 82,
    badge: "Trending",
    image: "assets/images/products/wallets/wallet-2.jpg",
    gallery: [
      "assets/images/products/wallets/wallet-2.jpg",
      "assets/images/products/wallets/wallet-3.jpg",
      "assets/images/products/extras/bag-extra-3.jpg",
      "assets/images/products/wallets/wallet-1.jpg"
    ],
    colors: [
      { name: "Whiskey Tan", hex: "#8b5229" },
      { name: "Dark Chocolate", hex: "#3d2516" }
    ],
    material: "Full-Grain Vegetable Tanned Vachetta Leather",
    dimensions: "11cm (W) x 9cm (H) x 1.2cm (D)",
    capacity: "8 card pockets, dual currency sleeve, ultra-slim profile",
    hardware: "Debossed gold foil Maison Vélure crest",
    shortDesc: "Featherweight pocket profile. Seamless hand-skived edges that prevent bulk in clutches and tailored trouser pockets.",
    description: "Crafted for minimalists who appreciate pure leather tactility. Natural vegetable-tanned Vachetta leather darkens to a rich caramel honey patina over time.",
    isBestSeller: false,
    isTrending: true,
    isNew: false,
    featuredHome1: false,
    featuredHome2: true
  },
  {
    id: "wallet-kisslock-coin",
    name: "Vintage Brass Kiss-Lock Coin Purse",
    category: "wallets",
    categoryLabel: "Wallets & Small Leather Goods",
    price: 85,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 54,
    badge: "New",
    image: "assets/images/products/wallets/wallet-3.jpg",
    gallery: [
      "assets/images/products/wallets/wallet-3.jpg",
      "assets/images/products/extras/bag-extra-3.jpg",
      "assets/images/products/wallets/wallet-4.jpg",
      "assets/images/products/wallets/wallet-2.jpg"
    ],
    colors: [
      { name: "Emerald Green", hex: "#134633" },
      { name: "Burgundy Wine", hex: "#541b25" }
    ],
    material: "Soft Glazed Calfskin with Floral Jacquard Silk Lining",
    dimensions: "12cm (W) x 10cm (H) x 4cm (D)",
    capacity: "Coins, folded banknotes, rings, earphones, jewelry keepsakes",
    hardware: "Antiqued filigree brass kiss-lock frame",
    shortDesc: "A delightful touch of nostalgia. Antique brass kiss-lock clasp with silk jacquard interior for precious coins, jewelry, and earbuds.",
    description: "The kiss-lock purse is a charming staple for your tote or vanity table. The brass clasp snaps with an unmistakable, nostalgic chime.",
    isBestSeller: false,
    isTrending: false,
    isNew: true,
    featuredHome1: false,
    featuredHome2: true
  },
  {
    id: "wallet-accordion-card",
    name: "Signature Accordion Multi-Card Purse",
    category: "wallets",
    categoryLabel: "Wallets & Small Leather Goods",
    price: 110,
    originalPrice: 135,
    rating: 4.7,
    reviewsCount: 67,
    badge: "",
    image: "assets/images/products/wallets/wallet-4.jpg",
    gallery: [
      "assets/images/products/wallets/wallet-4.jpg",
      "assets/images/products/extras/bag-extra-3.jpg",
      "assets/images/products/wallets/wallet-1.jpg",
      "assets/images/products/wallets/wallet-2.jpg"
    ],
    colors: [
      { name: "Taupe Grey", hex: "#7e746b" },
      { name: "Cognac", hex: "#8c4d28" }
    ],
    material: "Grained Calf Leather with 9 Fan Accordion Slots",
    dimensions: "11.5cm (W) x 8cm (H) x 3cm (D)",
    capacity: "Holds up to 18 cards plus folded bills and coins",
    hardware: "Gold zipper with oversized leather pull tab",
    shortDesc: "Instant card visibility in a palm-sized silhouette. Fans open smoothly like a deck of cards to find any payment card in seconds.",
    description: "Never fumble for transit or credit cards again. The accordion structure organizes store loyalty, debit cards, and receipts effortlessly.",
    isBestSeller: false,
    isTrending: false,
    isNew: false,
    featuredHome1: true,
    featuredHome2: false
  },

  // --- GIFTING COLLECTION ---
  {
    id: "gift-luxe-box",
    name: "Maison Luxe Gold-Embossed Gift Presentation Set",
    category: "gifting",
    categoryLabel: "Gift Collections",
    price: 295,
    originalPrice: 350,
    rating: 5.0,
    reviewsCount: 94,
    badge: "Best Seller",
    image: "assets/images/gifting/gift-1.jpg",
    gallery: [
      "assets/images/gifting/gift-1.jpg",
      "assets/images/gifting/gift-2.jpg",
      "assets/images/gifting/gift-3.jpg",
      "assets/images/gifting/gift-4.jpg"
    ],
    colors: [
      { name: "Signature Noir & Gold", hex: "#1a1817" },
      { name: "Ivory Cream & Champagne", hex: "#f5f0e6" }
    ],
    material: "Rigid Heavyboard Box with Gold Foil Hot-Stamping & Grosgrain Ribbon",
    dimensions: "35cm x 28cm x 15cm Presentation Case",
    capacity: "Includes choice of Handbag, Custom Monogram Card & Leather Balm",
    hardware: "Magnetic closure with double-faced satin bow",
    shortDesc: "The ultimate unboxing experience. Rigid gold-embossed keepsake box containing a handbag, silk twilly scarf, and personalized calligraphy note.",
    description: "Elevate your gift to unforgettable status. Each gift box is lined in black archival tissue, sealed with a gold wax seal, and wrapped in grosgrain ribbon.",
    isBestSeller: true,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: true
  },
  {
    id: "gift-anniversary-duo",
    name: "The Anniversary Luxe Handbag & Silk Scarf Duo",
    category: "gifting",
    categoryLabel: "Gift Collections",
    price: 495,
    originalPrice: 580,
    rating: 4.9,
    reviewsCount: 57,
    badge: "Trending",
    image: "assets/images/gifting/gift-2.jpg",
    gallery: [
      "assets/images/gifting/gift-2.jpg",
      "assets/images/gifting/gift-1.jpg",
      "assets/images/gifting/gift-3.jpg",
      "assets/images/gifting/gift-4.jpg"
    ],
    colors: [
      { name: "Cognac & Bordeaux Silk", hex: "#7a3e1d" },
      { name: "Noir & Emerald Silk", hex: "#161616" }
    ],
    material: "Full-Grain Italian Calfskin Bag + 100% Mulberry Silk Twilly (85cm)",
    dimensions: "Curated Luxury Box Set",
    capacity: "Top-Handle Satchel + Hand-Rolled Silk Scarf + Leather Care Wax",
    hardware: "Complimentary custom gold monogramming included",
    shortDesc: "A timeless token of devotion. Our flagship satchel handbag paired with a hand-rolled Mulberry silk twilly scarf to tie on handles.",
    description: "Celebrate milestones with perfection. Arrives with a custom engraved brass key clochette with your anniversary date or initials embossed in gold foil.",
    isBestSeller: false,
    isTrending: true,
    isNew: false,
    featuredHome1: true,
    featuredHome2: true
  },
  {
    id: "gift-holiday-velvet",
    name: "Holiday Celebration Velvet Gift Box",
    category: "gifting",
    categoryLabel: "Gift Collections",
    price: 360,
    originalPrice: 420,
    rating: 4.8,
    reviewsCount: 48,
    badge: "New",
    image: "assets/images/gifting/gift-3.jpg",
    gallery: [
      "assets/images/gifting/gift-3.jpg",
      "assets/images/gifting/gift-1.jpg",
      "assets/images/gifting/gift-2.jpg",
      "assets/images/gifting/gift-4.jpg"
    ],
    colors: [
      { name: "Festive Crimson", hex: "#751522" },
      { name: "Forest Pine", hex: "#153324" }
    ],
    material: "Plush Velvet Covered Keepsake Chest with Brass Latches",
    dimensions: "32cm x 24cm x 12cm Velvet Chest",
    capacity: "Vendome Velvet Evening Clutch + Matching Velvet Cardholder",
    hardware: "Polished brass latch closure and commemorative brass plate",
    shortDesc: "Wrapped in festive royal velvet. Features an evening clutch, matching cardholder, and scented cedar sachet.",
    description: "Designed for the festive season, this rich velvet chest doubles as a permanent jewelry keepsake box for her vanity long after the holidays.",
    isBestSeller: false,
    isTrending: false,
    isNew: true,
    featuredHome1: false,
    featuredHome2: true
  },
  {
    id: "gift-bridal-party",
    name: "Bridal Party Monogrammed Bag Set",
    category: "gifting",
    categoryLabel: "Gift Collections",
    price: 680,
    originalPrice: 820,
    rating: 5.0,
    reviewsCount: 39,
    badge: "Limited Edition",
    image: "assets/images/gifting/gift-4.jpg",
    gallery: [
      "assets/images/gifting/gift-4.jpg",
      "assets/images/gifting/gift-1.jpg",
      "assets/images/gifting/gift-2.jpg",
      "assets/images/gifting/gift-3.jpg"
    ],
    colors: [
      { name: "Blush Rose & Ivory", hex: "#e5b8b0" },
      { name: "Champagne Pearl", hex: "#e8dcce" }
    ],
    material: "Soft Milled Calfskin with Individual Foil Monogramming",
    dimensions: "Set of 3 Matching Handcrafted Clutches/Wristlets",
    capacity: "Curated trio for Bride and Maid of Honor / Bridesmaids",
    hardware: "Rose gold hardware and engraved commemoration tags",
    shortDesc: "Say thank you to your bridal party with a matching trio of personalized wristlets embossed with each bridesmaid’s name.",
    description: "An unforgettable wedding keepsake. Each clutch comes packaged in its own individualized dustbag and champagne-ribboned gift box.",
    isBestSeller: false,
    isTrending: false,
    isNew: false,
    featuredHome1: false,
    featuredHome2: true
  },
  {
    id: "gift-concierge-card",
    name: "Maison Vélure Bespoke Gift Card with Leather Sleeve",
    category: "gifting",
    categoryLabel: "Gift Collections",
    price: 250,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 115,
    badge: "Most Popular",
    image: "assets/images/gifting/gift-5.jpg",
    gallery: [
      "assets/images/gifting/gift-5.jpg",
      "assets/images/gifting/gift-1.jpg",
      "assets/images/gifting/gift-2.jpg",
      "assets/images/gifting/gift-3.jpg"
    ],
    colors: [
      { name: "Saddle Tan Sleeve", hex: "#93532c" },
      { name: "Noir Onyx Sleeve", hex: "#161616" }
    ],
    material: "Hand-Stitched Calfskin Card Sleeve with Heavy Metallic Gift Card",
    dimensions: "Credit Card Size in Luxury Presentation Sleeve",
    capacity: "Redeemable for any handbag, tote, or bespoke monogramming order",
    hardware: "Gold foil hot-stamped envelope and wax seal",
    shortDesc: "Let her choose her dream silhouette. Heavy metal gift card tucked inside a reusable hand-stitched leather cardholder sleeve.",
    description: "The ideal gift when you want to grant the luxury of personal choice. Available in denominations from $100 to $1,000, presented with the highest luxury standards.",
    isBestSeller: true,
    isTrending: false,
    isNew: false,
    featuredHome1: true,
    featuredHome2: false
  }
];

// Helper to look up a product by ID
function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id) || PRODUCTS_DATA[0];
}

// Expose globally
if (typeof window !== "undefined") {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
  window.getProductById = getProductById;
}

