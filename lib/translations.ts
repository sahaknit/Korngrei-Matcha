export const translations = {
  en: {
    Navbar: {
      home: "Home",
      shop: "Shop",
      learn: "Learn",
      ourStory: "Our Story",
      contactUs: "Contact Us",
    },
    HeroSection: {
      title: "Discover the Art of Matcha",
      subtitle: "Handcrafted matcha sets for mindful moments. Each bowl is made with care, inspired by tradition, and designed for modern rituals.",
      buttonText: "Contact us"
    },
      AboutSection: {
      title: "About Us",
      storyTitle: "Our Story: A Tradition of Quality",
      storyParagraph1: "Our philosophy is rooted in the rich heritage of Kampong Chhnang province, a land renowned for its master potters. Like a finely crafted piece of pottery, each of our products is shaped with skill, passion, and an unwavering commitment to quality. We pride ourselves on using only the finest ingredients, sourced directly from nature and infused with vibrant local elements like fresh green lime.",
      storyParagraph2: "Inspired by Tradition, Crafted for Today",
      storyParagraph3: "Noticing the local appreciation for Japanese Matcha, we were inspired to innovate. We set out to create a uniquely Cambodian product, starting with pure, locally-sourced green tea and meticulously blending it with the best ingredients our country has to offer.",
      missionStatement: "Our mission is to create high-quality, hygienic products you can trust for your well-being."
    },
       MatchaBowlListSection: { // Add this new section
      title: "Our Matcha Bowls",
      buttonText: "Shop Now"
    },
     products: {
      1: {
        name: "Classic Matcha Bowl Set",
        description: "A handcrafted matcha bowl set featuring a traditional design. Perfect for daily tea rituals with its smooth finish and elegant curves."
      },
      2: {
        name: "Modern Zen Matcha Bowl",
        description: "A contemporary take on matcha bowls, combining sleek lines with natural textures. Ideal for modern tea enthusiasts."
      },
      3: {
        name: "Premium Ceremonial Set",
        description: "An exclusive ceremonial set, complete with a bamboo whisk, scoop, and premium matcha powder. Elevate your tea experience with this luxurious collection."
      },
      4: {
        name: "Travel-Friendly Matcha Kit",
        description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers."
      },
      5: {
        name: "Another Travel Kit",
        description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers."
      },
      6: {
        name: "Yet Another Kit",
        description: "Compact and portable, this travel-friendly kit includes a mini matcha bowl, whisk, and scoop. Perfect for on-the-go tea lovers."
      },
    },
      MatchaSetsSection: {
      title: "Our Matcha Sets",
      subheading: "Explore Our Collection", // Example translation
      heroImageAlt: "Featured Matcha Set Collection", // Example translation
      // Add other keys if your component uses them (e.g., buttonText for a CTA)
    },
    // ---> END ADDITION <---

    // ---> UPDATE/ENSURE PRODUCTS TRANSLATIONS EXIST FOR ENGLISH <---
    product: {
      // ... (other existing product translations for MatchaBowlListSection if any) ...
      // Translations for items displayed in MatchaSetsSection (IDs 1-6)
      1: {
        name: "KBACH KHMER Ceramic Bowl", // Match the name in your component's matchaSets array
        description: "A timeless matcha bowl set crafted from high-quality ceramic.",
        features: ["Hand-painted finish", "Authentic shape", "Easy to clean"], // Translate features if needed
        alt: "Classic Ceramic Matcha Bowl Set" // Specific alt text translation
      },
      2: {
        name: "Whisk Holder",
        description: "An elegant combination of natural bamboo tools and a stone bowl.",
        features: ["Includes whisk (chasen)", "Scoop (chashaku)", "Natural materials"],
        alt: "Bamboo and Stone Matcha Ritual Set"
      },
      3: {
        name: "Modern Minimalist Set",
        description: "A sleek, contemporary take on the traditional matcha experience.",
        features: ["Geometric design", "Matte finish", "Compact storage"],
        alt: "Modern Minimalist Matcha Set"
      },
      4: {
        name: "Premium Handcrafted Bowl",
        description: "A unique, individually crafted bowl by a master artisan.",
        features: ["One-of-a-kind design", "Traditional techniques", "Comes with certificate"],
        alt: "Premium Handcrafted Matcha Bowl"
      },
      5: {
        name: "Travel-Friendly Kit",
        description: "A portable set perfect for enjoying matcha on the go.",
        features: ["Compact and lightweight", "Durable materials", "Carrying case included"],
        alt: "Travel-Friendly Matcha Kit"
      },
      6: {
        name: "Luxury Gold-Edged Set",
        description: "An opulent set featuring gold accents for a special occasion.",
        features: ["Gold rim details", "Premium packaging", "Ideal gift option"],
        alt: "Luxury Gold-Edged Matcha Set"
      },
      // ... (potentially other product IDs for MatchaBowlListSection) ...
    },
  
    
  },
  km: {
    Navbar: {
      home: "ទំព័រដើម",
      shop: "ទំនិញ",
      learn: "សិក្សា",
      ourStory: "រឿងរបស់យើង",
      contactUs: "ទំនាក់ទំនង",
    },
    HeroSection: {
      title: "ស្វែងយល់ពីសិល្បៈនៃម៉ាឆា",
      subtitle: "ឈុតម៉ាឆាធ្វើដោយដៃ សម្រាប់ពេលវេលាដ៏ស្ងប់សុខ។ ចាននីមួយៗផលិតដោយយកចិត្តទុកដាក់ តាមបែបប្រពៃណី និងរចនាឡើងសម្រាប់សម័យទំនើប។",
      buttonText: "ទំនាក់ទំនងយើង"
    },
       AboutSection: {
      title: "អំពីយើង",
      storyTitle: "របស់យើង: បុព្វបទនៃគុណភាព",
      storyParagraph1: "ទស្សនវិស័យរបស់យើងមានឫសគល់នៅក្នុងប្រវត្តិសាស្ត្រសម្បូររបស់ខេត្តកំពង់ឆ្នាំង ដែលជាផ្ទះកំណើតនៃចំណេះដឹងនៃការបំពង់ដែលល្បីល្បាញ។ ដូចជាធាតុដីដែលបានបំពង់ដោយចំណេះដឹង ផលិតផលនីមួយៗរបស់យើងត្រូវបានបង្កើតដោយប្រើជំនាញ ការស្រឡាញ់ និងការប្តេជ្ញាចិត្តដែលមិនធ្លាក់ចុះ។ យើងខ្ញុំមានភាពសប្បាយរិះរកការប្រើប្រាស់សម្ភារៈដែលមានគុណភាពខ្ពស់បំផុត ដែលបានទាញយកដោយផ្ទាល់ពីធម្មជាតិ និងបានបញ្ចូលនូវធាតុក្នុងស្រុកដែលរស់រវើកដូចជាខ្ទឹមបៃតងស្រស់ៗ។",
      storyParagraph2: "បានទាញយកចិត្តដោយប្រពៃណី បំពង់សម្រាប់ថ្ងៃនេះ",
      storyParagraph3: "ដោយកត់សម្គាល់ពីភាពស្រឡាញ់ក្នុងការទទួលយកម៉ាតស៊ីជប៉ុន យើងត្រូវបានលើកទឹកចិត្តឱ្យបង្កើតនវាកម្ម។ យើងចាប់ផ្តើមដោយប្រើតែសំបូរបៃតងដែលបានទាញយកដោយផ្ទាល់ពីកន្លែង ហើយបញ្ចូលគ្នាដោយប្រុងប្រយ័ត្នជាមួយនឹងសម្ភារៈល្អបំផុតដែលប្រទេសរបស់យើងមាន។",
      missionStatement: "បេសកកម្មរបស់យើងគឺបង្កើតផលិតផលដែលមានគុណភាពខ្ពស់ ដែលអាចទុកចិត្តបានសម្រាប់សុខុមាលភាពរបស់អ្នក។"
    },
     MatchaBowlListSection: { // Add this new section
      title: "ចានម៉ាតស៊ីរបស់យើង",
      buttonText: "ទិញឥឡូវនេះ"
    },
    products: {
      1: {
        name: "ឈុតចានម៉ាតស៊ីបុរាណ",
        description: "ឈុតចានម៉ាតស៊ីដែលបានផលិតដោយដៃដែលមានរចនាប័ទ្មបុរាណ។ ល្អឥតខ្ចោះសម្រាប់វិធីសាស្ត្របុរាណនៃការផឹកតែជាមួយនឹងផ្ទៃរលោង និងបន្ទាត់ស្តាយ។"
      },
      2: {
        name: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់",
        description: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់ដែលបង្កប់នូវបន្ទាត់ស្តាយបន្សំជាមួយនឹងអត្ថ៌កណ្ឌធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែស្ទាយទៀងទាត់។"
      },
      3: {
        name: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់",
        description: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់ដែលបង្កប់នូវបន្ទាត់ស្តាយបន្សំជាមួយនឹងអត្ថ៌កណ្ឌធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែស្ទាយទៀងទាត់។"
      },
      4: {
        name: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់",
        description: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់ដែលបង្កប់នូវបន្ទាត់ស្តាយបន្សំជាមួយនឹងអត្ថ៌កណ្ឌធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែស្ទាយទៀងទាត់។"
      },
      5: {
        name: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់",
        description: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់ដែលបង្កប់នូវបន្ទាត់ស្តាយបន្សំជាមួយនឹងអត្ថ៌កណ្ឌធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែស្ទាយទៀងទាត់។"
      },
      6: {
        name: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់",
        description: "ចានម៉ាតស៊ីស្ទាយទៀងទាត់ដែលបង្កប់នូវបន្ទាត់ស្តាយបន្សំជាមួយនឹងអត្ថ៌កណ្ឌធម្មជាតិ។ ល្អសម្រាប់អ្នកស្រឡាញ់តែស្ទាយទៀងទាត់។"
      },
      
    },
        MatchaSetsSection: {
      title: "សំណុំម៉ាតស៊ីរបស់យើង", // Example Khmer translation
      subheading: "រុករកកម្រងរបស់យើង", // Example Khmer translation
      heroImageAlt: "កម្រងម៉ាតស៊ីដែលបានលក់", // Example Khmer translation
      // Add other keys translated to Khmer if your component uses them
    },
    // ---> END ADDITION <---

    // ---> UPDATE/ENSURE PRODUCTS TRANSLATIONS EXIST FOR KHMER <---
    product: {
      // ... (other existing product translations for MatchaBowlListSection if any, translated to Khmer) ...
      // Translations for items displayed in MatchaSetsSection (IDs 1-6) - TRANSLATED TO KHMER
      1: {
        name: "ឈុតចានម៉ាតស៊ីខេមរកែន", // Example Khmer translation
        description: "ឈុតម៉ាតស៊ីដែលបានបង្កើតដោយដៃដែលមានគុណភាពខ្ពស់។", // Example Khmer translation
        features: ["ការដាក់ពណ៌ដោយដៃ", "រូបរាងដើម", "ងាយស្រួលក្នុងការសំអាត"], // Translate features if needed
        alt: "ឈុតចានម៉ាតស៊ីបុរាណ" // Specific alt text translation in Khmer
      },
      2: {
        name: "កន្លែងដាក់ប៊ីត", // Example Khmer translation
        description: "ការរួមបញ្ចូលគ្នានៃឧបករណ៍ប៊ីតធម្មជាតិ និងចានថ្ម។", // Example Khmer translation
        features: ["រួមបញ្ចូលប៊ីត (chasen)", "ចាន (chashaku)", "សម្ភារៈធម្មជាតិ"],
        alt: "សំណុំពិធីប៊ីត និងចាន" // Specific alt text translation in Khmer
      },
      3: {
       name: "សំណុំម៉ូឌើនមីនីម៉ាល", // Example Khmer translation
        description: "ការបកប្រែទំនើបនៃបទពិសោធន៍ម៉ាតស៊ីបុរាណ។", // Example Khmer translation
        features: ["រចនារូបវិមាត្រ", "ប៉ៅម៉ាត់", "ផ្ទុះផ្ទាល់ខ្លួន"],
        alt: "សំណុំម៉ូឌើនមីនីម៉ាលម៉ាតស៊ី" // Specific alt text translation in Khmer
      },
      4: {
        name: "ចានប៊ីតដែលបានបង្កើតដោយដៃ", // Example Khmer translation
        description: "ចានដែលមានរចនាប័ទ្មពិសេសដោយសិល្បៈករ។", // Example Khmer translation
        features: ["រចនាប័ទ្មមួយគត់", "បទពិសោធន៍បុរាណ", "មានវិញ្ញាបនប័ត្រ"],
        alt: "ចានប៊ីតដែលបានបង្កើតដោយដៃ" // Specific alt text translation in Khmer
      },
      5: {
        name: "កញ្ចប់ដែលអាចយកទៅដំណើរ", // Example Khmer translation
        description: "សំណុំដែលអាចយកទៅដំណើរបានសម្រាប់ការរីករាយជាមួយនឹងម៉ាតស៊ី។", // Example Khmer translation
        features: ["ខ្ទប់ និងស្រាល", "សម្ភារៈមានគុណភាព", "មានកន្លែងផ្ទុក"],
        alt: "កញ្ចប់ដែលអាចយកទៅដំណើរ" // Specific alt text translation in Khmer
      },
      6: {
        name: "សំណុំមាសដែលមានគែម", // Example Khmer translation
        description: "សំណុំដែលមានគែមមាសសម្រាប់ព្រឹត្តិការណ៍ពិសេស។", // Example Khmer translation
        features: ["គែមមាស", "កញ្ចប់ពិសេស", "ជម្រើសផ្តល់ជូនល្អ"],
        alt: "សំណុំមាសដែលមានគែម" // Specific alt text translation in Khmer
      },
      // ... (potentially other product IDs for MatchaBowlListSection, translated to Khmer) ...
    }
    // LanguageSwitcher section can be removed
  },
};