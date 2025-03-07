var id = 0
export const products = {
  Laptops: [
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/1181462/pexels-photo-1181462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera, Touch ID- Starlight',
      price: 104990,
      details: {
        processor: 'M3',
        memory: '8 GB RAM 512 GB SSD',
        storage: '256GB SSD',
        operatingSystem: 'Mac OS',
        display: 'A BRILLIANT DISPLAY — The 34.46 cm (13.6″) Liquid Retina display supports 1 billion colours'
      }
    },
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Acer Aspire Lite AMD Ryzen 5 5500U Premium Thin and Light Laptop (16 GB RAM/512 GB SSD/Windows 11 Home) AL15-41, 39.62 cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.59 KG',
      price: 35990,
      details: {
        processor: 'AMD Ryzen 5 5500U Hexa-Core Mobile Processor with AMD Radeon Graphics',
        memory: 'RAM - 16 GB of Dual-channel DDR4, 2 SODIMM sockets',
        storage: '512 GB SSD NVMe solid-state drive storage (expandable up to 1TB) to store your files and media',
        operatingSystem: 'Windows 11 Home',
        display: 'Experience sharp details and crisp colors on the 15.6" Full HD display, 16:9 aspect ratio, ultra-slim design and narrow bezels.'
      }
    },
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W',
      price: 19990,
      details: {
        processor: 'Intel Celeron N4020, 1.1 GHz base speed, Up to 2.8 GHz Turbo Speed, 2 cores, 2 Threads, 4MB Cache',
        memory: '4GB SO-DIMM DDR4 2400MHz RAM, Support up to 8GB using 1x SO-DIMM Slot with',
        storage: '256GB M.2 NVMe PCIe SSD',
        operatingSystem: 'Windows 11 Home',
        display: '35.56 cm (14 Inch) 1920 x 1080 Pixel'
      }
    },
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Lenovo V15 Intel Celeron N4500 15.6" (39.62 cm) FHD (1920x1080) Antiglare 250 Nits Thin and Light Laptop (8GB RAM/256GB SSD/Windows 11 Home/Black/1Y Onsite/1.7 kg), 82QYA00MIN',
      price: 20480,
      details: {
        processor: 'Intel Celeron N4500 processor, base speed 1.1 Ghz, max speed 2.8 Ghz, 2 Cores, 4MB L3 smart cache',
        memory: '8GB DDR4 RAM 2933 MHz, dual-channel capable',
        storage: '256GB SSD M.2 upgradable up to 512GB SSD',
        operatingSystem: 'Preloaded Windows 11 Home SL with Lifetime Validity',
        display: '15.6" (39.62 cm) screen with (1920x1080) FHD Antiglare, 250 Nits display'
      }
    },
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/3776438/pexels-photo-3776438.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dell Inspiron 7420 2in1 Laptop, Intel Core i7-1255U Processor/16GB/512GB/14.0" (35.56cm) FHD+ WVA Touch 250 nits, Active Pen/Win 11 + MSO' + '21, 15 Month McAfee/Backlit KB + FPR/Platinum Silver',
      price: 69990,
      details: {
        processor: 'Intel Core i3 11th Gen',
        memory: '16GB, 2x8GB, DDR4, 3200MHz',
        storage: '512GB SSD',
        operatingSystem: 'Windows 11 Home + Office H&S 2021 + 15 Months McAfee Antivirus',
        display: '14.0" FHD+ WVA Truelife Touch Narrow Border 250 nits'
      }
    },
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/17706650/pexels-photo-17706650/free-photo-of-man-sitting-with-newspaper-over-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'HP Laptop 15, 12th Gen i3-1215U, 15.6-inch (39.6 cm), FHD, Anti-Glare, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Dual Speakers, (Win 11, MSO 2021, Silver, 1.69 kg), 15s-fy5006TU',
      price: 34990,
      details: {
        processor: 'Intel Core i3-1215U (up to 4.4 GHz with Intel Turbo Boost Technology, 10 MB L3 cache, 6 cores, 8 threads)',
        memory: '8 GB DDR4-3200 MHz RAM (1 x 8 GB)',
        storage: '512 GB PCIe NVMe M.2 SSD',
        operatingSystem: 'Windows 11 Home Single Language |Microsoft Office Home & Student Edition 2021',
        display: '39.6 cm (15.6") diagonal, FHD (1920 x 1080), micro-edge, anti-glare, 250 nits, 45% NTSC'
      }
    }
  ],
  Headphones: [
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/7679539/pexels-photo-7679539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'boAt Airdopes 131 with upto 60 Hours and ASAP Charge Bluetooth Headset  (Active Black, True Wireless)',
      price: 899,
      details: {
        version: 'v5.0',
        waterResistant: 'IPX4',
        chargingTime: '2 hrs',
        playTime: '12 hrs'
      }
    },
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/7129065/pexels-photo-7129065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Boult Audio W20 with Zen ENC Mic, 32H Battery Life, Low Latency Gaming, Made in India, 5.3v Bluetooth Headset  (Glacier Blue, True Wireless)',
      price: 899,
      details: {
        version: 'v5.3',
        waterResistant: 'IPX5 ',
        chargingTime: '10 Mins',
        playTime: '120 Mins'
      }
    },
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/19154544/pexels-photo-19154544/free-photo-of-wireless-earphones-and-speaker.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'OPPO Enco Buds 2 with 28 hours Battery life & Deep Noise Cancellation Bluetooth Headset  (Midnight, True Wireless)',
      price: 1599,
      details: {
        version: 'v5.2',
        waterResistant: 'IPX4',
        chargingTime: '1.5 hrs',
        playTime: '28 hrs'
      }
    },
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/10104850/pexels-photo-10104850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'realme Buds T300 with 12.4mm Driver, 30dB ANC, 360 Spatial Audio and 40 hours Playback Bluetooth Headset  (Stylish Black, True Wireless)',
      price: 2299,
      details: {
        version: 'v5.3',
        waterResistant: 'IP55',
        chargingTime: '10 Mins',
        playTime: '7 hrs'
      }
    },
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/7242802/pexels-photo-7242802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'boAt Airdopes 161 with 40 Hours Playback, ASAP Charge & 10mm Drivers Bluetooth Headset  (Pebble Black, True Wireless)',
      price: 1099,
      details: {
        version: 'v5.1',
        waterResistant: 'IPX5',
        chargingTime: '10 Mins',
        playTime: '3 hrs'
      }
    },
    {
      id: ++id,
      img: 'https://images.pexels.com/photos/8004012/pexels-photo-8004012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Boult Audio X50 with 40Hr Battery, Quad Mic ENC, 45ms Ultra Low Latency, Made In India, 5.1 Bluetooth Headset  (Blue, Grey, True Wireless)',
      price: 999,
      details: {
        version: 'v5.1',
        waterResistant: 'IPX5',
        chargingTime: '10 Mins',
        playTime: '100 Mins'
      }
    },
  ]
}