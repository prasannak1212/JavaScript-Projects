let allProds = [
    {
        id: 1,
        product: "laptop",
        name: "Laptop 1",
        image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?cs=srgb&dl=pexels-life-of-pix-7974.jpg&fm=jpg",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 55,000`,
        quantity: 0,
    },

    {
        id: 2,
        product: "laptop",
        name: "Laptop 2",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 85,000`,
        quantity: 0,
    },

    {
        id: 3,
        product: "phone",
        name: "Phone 3",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://www.ephotozine.com/articles/samsung-announce-galaxy-a7-2018-with-triple-camera-32727/images/xlg_Galaxy-A7.jpg",
        price: ` 35,000`,
        quantity: 0,
    },

    {
        id: 4,
        product: "phone",
        name: "Phone 4",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://www.digitaltrends.com/wp-content/uploads/2023/01/OnePlus-11-Back-in-Hand.jpg?fit=3000%2C2000&p=1",
        price: ` 55,000`,
        quantity: 0,
    },

    {
        id: 5,
        product: "phone",
        name: "Phone 5",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://images.wallpaperscraft.com/image/single/phone_smartphone_hand_144060_1920x1080.jpg",
        price: ` 40,000`,
        quantity: 0,
    },

    {
        id: 6,
        product: "phone",
        name: "Phone 6",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://images.unsplash.com/photo-1634042148057-32603ec95d95?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: ` 1,15,000`,
        quantity: 0,
    },

    {
        id: 7,
        product: "phone",
        name: "Phone 7",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://vn-test-11.slatic.net/p/b810bd872dae4bffe32cafec83aaa5fe.jpg",
        price: ` 87,000`,
        quantity: 0,
    },

    {
        id: 8,
        product: "phone",
        name: "Phone 8",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://assets.thehansindia.com/h-upload/2022/08/20/1308713-samsung-galaxy-s23-ultra.webp",
        price: ` 1,50,000`,
        quantity: 0,
    },

    {
        id: 9,
        product: "phone",
        name: "Phone 9",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg?cs=srgb&dl=pexels-pixabay-248528.jpg&fm=jpg",
        price: ` 1,25,000`,
        quantity: 0,
    },

    {
        id: 10,
        product: "headset",
        name: "Headset 10",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://m.media-amazon.com/images/I/71XMA5xupOL.jpg",
        price: ` 25,000`,
        quantity: 0,
    },

    {
        id: 11,
        product: "headset",
        name: "Headset 11",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://img.etimg.com/thumb/msid-76908629,width-650,imgsize-169955,,resizemode-4,quality-100/sony-wf-xb700.jpg",
        price: ` 3,500`,
        quantity: 0,
    },

    {
        id: 12,
        product: "tabs",
        name: "Tab 12",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://cdn.shopify.com/s/files/1/0564/9652/1403/products/Tab11SE-Blue_01.jpg",
        price: ` 75,000`,
        quantity: 0,
    },
]
let laptops = [
    {
        id: 1,
        product: "laptop",
        name: "Laptop 1",
        image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?cs=srgb&dl=pexels-life-of-pix-7974.jpg&fm=jpg",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 55,000`,
        quantity: 0,
    },

    {
        id: 2,
        product: "laptop",
        name: "Laptop 2",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 85,000`,
        quantity: 0,
    },

    {
        id: 3,
        product: "laptop",
        name: "Laptop 3",
        image: "https://m.media-amazon.com/images/I/819w0HBqASS.jpg",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 60,000`,
        quantity: 0,
    },

    {
        id: 4,
        product: "laptop",
        name: "Laptop 4",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/1/DV/KN/PV/144290424/hp-victus.jpg",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 45,000`,
        quantity: 0,
    },

    {
        id: 5,
        product: "laptop",
        name: "Laptop 5",
        image: "https://images.jdmagicbox.com/quickquotes/images_main/asus-zenbook-14-ultra-thin-and-light-laptop-4-way-nanoedge-14-full-hd-intel-core-i7-8565u-8gb-lpddr3-ram-512gb-nvme-pcie-ssd-wi-fi-5-windows-10-silver-blue-ux431fa-es74-179008469-q9czu.jpg  ",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 1,25,000`,
        quantity: 0,
    },

    {
        id: 6,
        product: "laptop",
        name: "Laptop 6",
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 95,000`,
        quantity: 0,
    },

    {
        id: 7,
        product: "laptop",
        name: "Laptop 7",
        image: "https://laptopsking.com/cdn/shop/files/DellXps137390_2.jpg?v=1707478956&width=1946",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 75,000`,
        quantity: 0,
    },

    {
        id: 8,
        product: "laptop",
        name: "Laptop 8",
        image: "https://www.gizcomputer.com/wp-content/uploads/2019/12/HP-Envy-13-AQ0003NS.jpg",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 90,000`,
        quantity: 0,
    },

    {
        id: 9,
        product: "laptop",
        name: "Laptop 9",
        image: "https://plus.unsplash.com/premium_photo-1681566925246-cc584a44d7fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 35,000`,
        quantity: 0,
    },

    {
        id: 10,
        product: "laptop",
        name: "Laptop 10",
        image: "https://images-cdn.ubuy.co.in/65214f96e30f9d21000945a2-hp-envy-13-3-4k-ultra-hd-touch-screen.jpg",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 67,000`,
        quantity: 0,
    },

    {
        id: 11,
        product: "laptop",
        name: "Laptop 11",
        image: "https://images6.alphacoders.com/133/1338694.png",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 1,00,000`,
        quantity: 0,
    },

    {
        id: 12,
        product: "laptop",
        name: "Laptop 12",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
        des: "This laptop has a 15.6″ screen with an HD resolution of 1920 x 1080 pixels. It comes with an Intel Core i5 processor and 8GB of RAM.",
        price: ` 1,50,000`,
        quantity: 0,
    },
]
let phones = [
    {
        id: 1,
        product: "phone",
        name: "Phone 1",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://9to5mac.com/wp-content/uploads/sites/6/2023/06/iOS-17-wallpaper.jpg?quality=82&strip=all&w=1600",
        price: ` 95,000`,
        quantity: 0,
    },

    {
        id: 2,
        product: "phone",
        name: "Phone 2",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://m.media-amazon.com/images/I/71kduvIxBVL.jpg",
        price: ` 65,000`,
        quantity: 0,
    },

    {
        id: 3,
        product: "phone",
        name: "Phone 3",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://www.ephotozine.com/articles/samsung-announce-galaxy-a7-2018-with-triple-camera-32727/images/xlg_Galaxy-A7.jpg",
        price: ` 35,000`,
        quantity: 0,
    },

    {
        id: 4,
        product: "phone",
        name: "Phone 4",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://www.digitaltrends.com/wp-content/uploads/2023/01/OnePlus-11-Back-in-Hand.jpg?fit=3000%2C2000&p=1",
        price: ` 55,000`,
        quantity: 0,
    },

    {
        id: 5,
        product: "phone",
        name: "Phone 5",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://images.wallpaperscraft.com/image/single/phone_smartphone_hand_144060_1920x1080.jpg",
        price: ` 40,000`,
        quantity: 0,
    },

    {
        id: 6,
        product: "phone",
        name: "Phone 6",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://images.unsplash.com/photo-1634042148057-32603ec95d95?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: ` 1,15,000`,
        quantity: 0,
    },

    {
        id: 7,
        product: "phone",
        name: "Phone 7",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://vn-test-11.slatic.net/p/b810bd872dae4bffe32cafec83aaa5fe.jpg",
        price: ` 87,000`,
        quantity: 0,
    },

    {
        id: 8,
        product: "phone",
        name: "Phone 8",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://assets.thehansindia.com/h-upload/2022/08/20/1308713-samsung-galaxy-s23-ultra.webp",
        price: ` 1,50,000`,
        quantity: 0,
    },

    {
        id: 9,
        product: "phone",
        name: "Phone 9",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg?cs=srgb&dl=pexels-pixabay-248528.jpg&fm=jpg",
        price: ` 1,25,000`,
        quantity: 0,
    },

    {
        id: 10,
        product: "phone",
        name: "Phone 10",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://images.shopkees.com/uploads/cdn/images/1000/1698190992_1665570739.jpg",
        price: ` 25,000`,
        quantity: 0,
    },

    {
        id: 11,
        product: "phone",
        name: "Phone 11",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://thumbs.ielectro.es/product/med/29780.webp",
        price: ` 15,000`,
        quantity: 0,
    },

    {
        id: 12,
        product: "phone",
        name: "Phone 12",
        des: "This smartphone features a 6.1-inch Super Retina HD display, powerful Hexa-core processor, 6GB of RAM, and 128GB of storage. The triple rear camera has a 48MP main sensor, 12MP ultra-wide-angle lens, and 12MP telephoto lens. The front camera is 12MP with selfie flash. The device has a 4500mAh battery, fast charging, and advanced biometric security features",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/oneplus-12-060247859-16x9_0.jpg?VersionId=RDInFo9AmXUEfi3iWiUayYpaKjmei_W2",
        price: ` 30,000`,
        quantity: 0,
    },
]
let headsets = [
    {
        id: 1,
        product: "headset",
        name: "Headset 1",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://mcprod.jumbo.ae/media/catalog/product/6/1/61mldpw9ltl.sl1500.10b93c6fb3.999xx_zsjnvxerfotcres2.jpg",
        price: ` 10,500`,
        quantity: 0,
    },

    {
        id: 2,
        product: "headset",
        name: "Headset 2",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://www.zdnet.com/a/img/resize/ec35a244f10219893a4cc7c4f4f6606712706305/2024/03/01/f080499b-6243-47e1-8923-59b1e01445cd/headphones.jpg?auto=webp&width=1280",
        price: ` 5,000`,
        quantity: 0,
    },

    {
        id: 3,
        product: "headset",
        name: "Headset 3",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://www.jiomart.com/images/product/original/491431365/itek-hd-bthp001-msd-wireless-headphone-blue-digital-o491431365-p590036452-0-202009260326.jpeg?im=Resize=(1000,1000)",
        price: ` 2,500`,
        quantity: 0,
    },

    {
        id: 4,
        product: "headset",
        name: "Headset 4",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://static.mercdn.net/item/detail/orig/photos/m75705828986_1.jpg?1694134409",
        price: ` 10,000`,
        quantity: 0,
    },

    {
        id: 5,
        product: "headset",
        name: "Headset 5",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://d2xamzlzrdbdbn.cloudfront.net/products/360e78dd-a51e-47c4-9e54-e07f4d142c09.jpg",
        price: ` 15,000`,
        quantity: 0,
    },

    {
        id: 6,
        product: "headset",
        name: "Headset 6",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://files.sophie.co.ke/2022/09/19-descript-dprui-v33-bluetooth-headphones-wireless-headset-earphone-stereo-foldable-sport-headset-with-microphone-for-mobile-phone-music_7826.png",
        price: ` 80,000`,
        quantity: 0,
    },

    {
        id: 7,
        product: "headset",
        name: "Headset 7",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://mac-center.com/cdn/shop/files/Airpods_PDP_Image_Position-1__MXLA.jpg?v=1700333403",
        price: ` 7,000`,
        quantity: 0,
    },

    {
        id: 8,
        product: "headset",
        name: "Headset 8",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://wallpaper.forfun.com/fetch/93/931be4d4f16556b7d2c8b94ae4e1f4c4.jpeg",
        price: ` 9,500`,
        quantity: 0,
    },

    {
        id: 9,
        product: "headset",
        name: "Headset 9",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://cdn.pixabay.com/photo/2014/04/05/11/41/earphone-316753_640.jpg",
        price: ` 700`,
        quantity: 0,
    },

    {
        id: 10,
        product: "headset",
        name: "Headset 10",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://m.media-amazon.com/images/I/71XMA5xupOL.jpg",
        price: ` 25,000`,
        quantity: 0,
    },

    {
        id: 11,
        product: "headset",
        name: "Headset 11",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://img.etimg.com/thumb/msid-76908629,width-650,imgsize-169955,,resizemode-4,quality-100/sony-wf-xb700.jpg",
        price: ` 3,500`,
        quantity: 0,
    },

    {
        id: 12,
        product: "headset",
        name: "Headset 12",
        des:"This wireless headset features crystal-clear audio, long-lasting battery life up to 24 hours, and advanced noise-cancellation technology. With comfortable ergonomic design and soft ear cushions, it's perfect for extended wear. Enjoy seamless connectivity with Bluetooth 5.0 and easy controls for music, calls, and voice assistants. Foldable design for easy storage and travel.",
        image: "https://images.techadvisor.com/cmsdata/reviews/3796329/huawei_freelace_pro_review_neckbud_headphones_thumb.jpg",
        price: ` 1,200`,
        quantity: 0,
    },
]
let tabs = [
    {
        id: 1,
        product: "tabs",
        name: "Tab 1",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://store.blackview.hk/cdn/shop/products/Tab10-Pro-Gray.jpg?v=1639634931",
        price: ` 45,000`,
        quantity: 0,
    },

    {
        id: 2,
        product: "tabs",
        name: "Tab 2",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://m.media-amazon.com/images/I/71ZlLF4nrnL._AC_UF1000,1000_QL80_.jpg",
        price: ` 20,000`,
        quantity: 0,
    },

    {
        id: 3,
        product: "tabs",
        name: "Tab 3",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://static.techspot.com/images/products/2018/tablets/org/2019-05-23-product-2.jpg",
        price: ` 63,000`,
        quantity: 0,
    },

    {
        id: 4,
        product: "tabs",
        name: "Tab 4",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://dealyasteal.com/cdn/shop/products/71EN0Bf4qUL._AC_SL1500_2048x2048.jpg?v=1640323720",
        price: ` 1,00,000`,
        quantity: 0,
    },

    {
        id: 5,
        product: "tabs",
        name: "Tab 5",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://m.media-amazon.com/images/I/81Xjef5HFZL.jpg",
        price: ` 55,000`,
        quantity: 0,
    },

    {
        id: 6,
        product: "tabs",
        name: "Tab 6",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://images-cdn.ubuy.co.in/63644901d1819d33bc249423-byybuo-smartpad-a10-tablet-10-1-inch.jpg",
        price: ` 15,000`,
        quantity: 0,
    },

    {
        id: 7,
        product: "tabs",
        name: "Tab 7",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://ae01.alicdn.com/kf/S7c0d37ac688844c5871d61f2d3d15f37U/Original-Lenovo-K10-Pro-10-6-inch-WiFi-Tablet-4GB-64GB-128GB-Android-12-MediaTek-Helio.jpg",
        price: ` 8,000`,
        quantity: 0,
    },

    {
        id: 8,
        product: "tabs",
        name: "Tab 8",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://sc04.alicdn.com/kf/Hc718c33f2b304f5ab20c2224dabb3c048.jpg",
        price: ` 50,000`,
        quantity: 0,
    },

    {
        id: 9,
        product: "tabs",
        name: "Tab 9",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://image.made-in-china.com/2f0j00huqbosKSrikY/Tablet-PC-with-SIM-Card-DC-Type-C-HDMI-Octa-Core-Android-4G-Cellular-Network-Tablet-10inches-Tableta.webp",
        price: ` 35,000`,
        quantity: 0,
    },

    {
        id: 10,
        product: "tabs",
        name: "Tab 10",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://sc04.alicdn.com/kf/H1a55a104ee4548f1bbef1f7f8ca3c681s.jpg",
        price: ` 28,500`,
        quantity: 0,
    },

    {
        id: 11,
        product: "tabs",
        name: "Tab 11",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://i5.walmartimages.com/asr/8e3e6eff-b71c-4928-97ad-86072a75310d.62bb6599ebc975f399f0116e384a8387.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        price: ` 15,000`,
        quantity: 0,
    },

    {
        id: 12,
        product: "tabs",
        name: "Tab 12",
        des: "This high-performance tablet features a stunning 10.1-inch IPS display, powerful Octa-core processor, 4GB of RAM, and 64GB of storage. Enjoy long-lasting battery life up to 12 hours, Wi-Fi and cellular connectivity, and advanced security features. Perfect for streaming, gaming, and productivity, with access to a wide range of apps. Includes a stylus and keyboard for added versatility.",
        image: "https://cdn.shopify.com/s/files/1/0564/9652/1403/products/Tab11SE-Blue_01.jpg",
        price: ` 75,000`,
        quantity: 0,
    },
]

let prod_cont = document.querySelector("#products");
let prod_row = document.querySelector("#pro_row");

let menu = document.querySelector("#menu");
let nav = document.querySelector(".nav_items");
let closer = document.querySelector("#close");
let products_row = document.querySelector('#product_row');
let productCart = document.querySelector("#product-cart");
let x = 0;

if(menu) {
    menu.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if(closer) {
    closer.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}

let disContainer;
let cartPage = document.querySelector('.product-cart')
let cartTable = document.querySelector('.cart-table');

let cart = document.querySelector('.cart-dis');
cart.addEventListener('click', clickCart);
disContainer = document.createElement("div");
disContainer.style.display = 'flex';

let close = document.createElement("i");
close.classList.add('d-flex');
close.classList.add('fas');
close.classList.add('fa-times');
close.classList.add('fa-2x');
close.style.cursor = 'pointer';
disContainer.appendChild(close);
disContainer.classList.add("display-container");
disContainer.classList.add("discontainer-cart-page");
disContainer.classList.add("container-fluid");
// disContainer.classList.add("container-fluid");
disContainer.classList.add("col-10");

cartPage = document.createElement('div');
cartPage.className = 'cart-page';
cartPage.appendChild(disContainer);

cartTable = document.createElement('div');
cartTable.className = 'cart-table';
cartTable.classList.add('container-fluid');
cartTable.classList.add('text-center');
// cartTable.classList.add('col-12');

let tableRow = document.createElement('div');
tableRow.className = 'cart-table-header';
tableRow.classList.add('row');
tableRow.classList.add('justify-content-center');
// tableRow.classList.add('p-5');

let tableHead = document.createElement('div');
tableHead.classList.add('col');
tableHead.classList.add('d-flex');
tableHead.classList.add('justify-content-center');
tableHead.classList.add('flex-wrap')
let tableHead1 = document.createElement('div');
tableHead1.classList.add('col-4');
tableHead1.classList.add('d-flex');
tableHead1.classList.add('justify-content-center');
tableHead1.classList.add('flex-wrap')
let tableHead2 = document.createElement('div');
tableHead2.classList.add('col');
tableHead2.classList.add('d-flex');
tableHead2.classList.add('justify-content-center');
tableHead2.classList.add('flex-wrap')
let tableHead3 = document.createElement('div');
tableHead3.classList.add('col');
tableHead3.classList.add('d-flex');
tableHead3.classList.add('justify-content-center');
tableHead3.classList.add('flex-wrap')

tableHead.innerHTML = 'Image';
tableHead1.innerHTML = 'Description';
tableHead2.innerHTML = 'Price';
tableHead3.innerHTML = 'Quantity';

tableRow.appendChild(tableHead);
tableRow.appendChild(tableHead1);
tableRow.appendChild(tableHead2);
tableRow.appendChild(tableHead3);

cartTable.appendChild(tableRow);
disContainer.appendChild(cartTable);

disContainer.style.display = 'none';
let bodyTag = document.querySelector('body');

bodyTag.appendChild(cartPage);

function clickCart(){
    disContainer.style.display = 'flex';
    close.addEventListener("click", () => {
        // disContainer.remove();
        disContainer.style.display = 'none';
    });
}

let cartQuantity = {};

function cardCreator(item){
    let prodCard = document.createElement("div");
    let prodContent = document.createElement("div");
    prodContent.className = "prod-content";

    prodCard.classList.add("prodCard");
    prodCard.classList.add(item.product);
    prodCard.classList.add("card");
    prodCard.classList.add("bg-dark");
    prodCard.classList.add("text-light");
    prodCard.classList.add("col-lg-3");
    prodCard.classList.add("p-1");
    prodCard.classList.add("m-4");

    let prodDet = document.createElement("div");
    prodDet.classList.add("prod_det");
    prodDet.classList.add("card-body");

    let imgCont = document.createElement("div");
    imgCont.className = "img_cont";

    let prodImage = document.createElement("img");
    prodImage.className = "prod_img";
    prodImage.classList.add("card-img-top");
    prodImage.classList.add("img-fluid");
    prodImage.src = item.image;

    imgCont.appendChild(prodImage);

    let prodHead = document.createElement("div");
    prodHead.className = "prod_head";
    prodHead.classList.add("card-title");
    prodHead.innerText = item.name;

    let prodDes = document.createElement("div");
    prodDes.className = "prod_des";
    prodDes.classList.add("card-text");
    prodDes.innerText = item.des;

    let prodCost = document.createElement("div");
    prodCost.className = "prod_cost";
    prodCost.classList.add("card-text");
    prodCost.innerText = '\u20b9' + " " + item.price;

    let addCart = document.createElement("button");
    addCart.classList.add(item.name.replace(" ", "_"));
    addCart.classList.add("add-cart");
    addCart.classList.add("btn");
    addCart.classList.add("btn-warning");
    addCart.classList.add("btn");
    addCart.classList.add("m-2");
    addCart.innerText = "Add to Cart";

    prodDet.appendChild(prodHead);
    // prodDet.appendChild(prodDes);
    prodDet.appendChild(prodCost);

    prodContent.appendChild(imgCont);
    prodContent.appendChild(prodDet);

    prodCard.appendChild(prodContent);
    prodCard.appendChild(addCart);

    let cart = document.querySelector(".cart");
    let badge = document.createElement('div');
    badge.className = 'badge';
    badge.style.fontSize = '15px';

    function addToCart(){
        item.quantity += 1;
        x += 1;
        
        badge.innerText = x;
        cart.appendChild(badge);

        if(x == 0){
            badge.remove();
        }

        let itmName = item.name.replace(' ', '-');
        let prodTableRow;
        let quantCell;
        let prodTable = document.createElement('div');
        prodTable.className = 'container-fluid';
        prodTable.id = 'cart-prod-table';
        prodTable.className = itmName;
        // prodTable.classList.add('mt-4')

        let addRemoveItem = document.createElement('div');
        addRemoveItem.className = 'row';
        addRemoveItem.classList.add('d-flex');
        addRemoveItem.classList.add('cart-add-remove-item');
        addRemoveItem.classList.add('justify-content-end');

        // let addButton = document.createElement('button');
        // addButton.className = 'btn btn-success ms-2';
        // addButton.classList.add('cart-add-button');
        // addButton.innerText = 'Add';
        // addButton.style.width = '100px';
        // addButton.style.textAlign = 'center';

        let removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger ms-2';
        removeButton.classList.add('cart-remove-button');
        // removeButton.classList.add(itmName);
        removeButton.innerText = 'Remove';
        removeButton.style.width = '100px';
        removeButton.style.textAlign = 'center';

        removeButton.addEventListener('click', () => {
            x -= cartQuantity[prodTable.className];
            item.quantity = 0;
            prodTable.remove();
            badge.innerText = x;
            cart.appendChild(badge);
            // console.log(prodTable.className);
            // if(x == 0){
            //     // badge.style.visibility = 'hidden';
            //     // badge.remove();
            // }
            // console.log(cartQuantity[prodTable.className])
            // console.log(x)//item.quantity;
        })

        // addRemoveItem.appendChild(addButton);
        addRemoveItem.appendChild(removeButton);

        prodTableRow = document.createElement('div');
        
        prodTableRow.classList.add('cart-prod-row');
        prodTableRow.classList.add('row');
        prodTableRow.classList.add('d-flex');
        prodTableRow.classList.add('justify-content-center');
        prodTableRow.classList.add('align-items-center');

        let imgCell = document.createElement('div');
        imgCell.className = itmName + 'img-cell-cart';
        imgCell.classList.add('image-cell-cart');
        imgCell.classList.add('col');
        let imgSrc = document.createElement('img');
        imgSrc.classList.add('img-fluid');
        imgSrc.classList.add('img-src-cart');
        imgSrc.src = item.image;
        imgSrc.style.height = '200px';
        // imgSrc.style.width = '200px';
        imgCell.appendChild(imgSrc);

        let desCell = document.createElement('div');
        desCell.className = itmName + 'description-cell-cart-page';
        desCell.classList.add('des-cell');
        desCell.classList.add('col-4');
        desCell.classList.add('d-inline');
        desCell.style.textAlign = 'justify';
        // desCell.style.width = '200px';
        desCell.innerText = item.des;

        let priceCell = document.createElement('div');
        priceCell.className = itmName + 'price-cell-cart';
        priceCell.classList.add('price-cell');
        priceCell.classList.add('col');
        priceCell.classList.add('d-inline');
        priceCell.style.textAlign = 'center';
        priceCell.innerText = '\u20b9' + " " + item.price;

        quantCell = document.createElement('div');
        quantCell.className = itmName + 'quantity-cell-cart';
        quantCell.classList.add('quantity-cell');
        quantCell.classList.add('col');
        quantCell.classList.add('d-inline');
        quantCell.innerText = item.quantity;
        quantCell.style.textAlign = 'center';
        cartQuantity[itmName] = item.quantity;
        console.log(cartQuantity);
        // console.log(typeof(cartQuantity[itmName]));

        prodTableRow.appendChild(imgCell);
        prodTableRow.appendChild(desCell);
        prodTableRow.appendChild(priceCell);
        prodTableRow.appendChild(quantCell);

        cartTable = document.querySelector('.cart-table');
        prodTable.appendChild(addRemoveItem);
        prodTable.appendChild(prodTableRow);
        cartTable.appendChild(prodTable);

        let classArray = document.querySelectorAll(`.${itmName}`);
        console.log(classArray);

        let i = 0;
        while(i != classArray.length - 1){
            classArray[i].remove();
            i++;
        }
    }

    function createProdDisplay(){
        let disContainer = document.createElement("div");
        disContainer.style.display = 'flex';
        let bodyTag = document.querySelector('body');
        let close = document.createElement("i");
        close.classList.add('d-flex');
        close.classList.add('fas');
        close.classList.add('fa-times');
        close.classList.add('fa-2x');
        close.style.cursor = 'pointer';
        disContainer.appendChild(close);
        disContainer.classList.add("display-container");
        disContainer.classList.add("container");
        // disContainer.classList.add("container-fluid");
        disContainer.classList.add("col-10");

        let prodImage = document.createElement('img');
        prodImage.className = 'prod-img'
        prodImage.src = item.image;

        let prodTitle = document.createElement('h2');
        prodTitle.className = 'prod-title';
        prodTitle.innerHTML = item.name;

        let prodDes = document.createElement('p');
        prodDes.className = 'prod-des';
        prodDes.innerHTML = item.des;

        let prodPrice = document.createElement('h2');
        prodPrice.className = 'prod-price';
        prodPrice.innerHTML = '\u20b9' + " " +item.price;

        let prodcol1 = document.createElement('div');
        prodcol1.className = 'col-lg';
        prodcol1.classList.add('prod-col1');

        let prodcol2 = document.createElement('div');
        prodcol2.className = 'col-lg';
        prodcol2.classList.add('prod-col2');

        let prodRow = document.createElement('div');
        prodRow.className = 'row';

        let displayAddCart = document.createElement("button");
        displayAddCart.classList.add(item.name.replace(" ", "_"));
        displayAddCart.classList.add("add-cart");
        displayAddCart.classList.add("btn");
        displayAddCart.classList.add("btn-warning");
        displayAddCart.classList.add("btn");
        displayAddCart.classList.add("m-2");
        displayAddCart.innerText = "Add to Cart";

        let buyNow = document.createElement('button');
        buyNow.classList.add(item.name.replace(" ", "_"));
        buyNow.classList.add("display-add-cart");
        buyNow.classList.add("btn");
        buyNow.classList.add("btn-success");
        buyNow.classList.add("text-light");
        buyNow.classList.add("btn");
        buyNow.classList.add("m-2");
        buyNow.innerText = "Buy Now";

        let buttonsRow = document.createElement('div');
        buttonsRow.className = 'row';
        buttonsRow.style.display = 'flex';

        buttonsRow.appendChild(displayAddCart);
        buttonsRow.appendChild(buyNow);

        prodcol1.appendChild(prodImage);
        prodcol2.appendChild(prodTitle);
        prodcol2.appendChild(prodDes);
        prodcol2.appendChild(prodPrice);
        prodcol2.appendChild(buttonsRow);

        prodRow.appendChild(prodcol1);
        prodRow.appendChild(prodcol2);
        disContainer.appendChild(prodRow);
    
        close.addEventListener("click", () => {
            disContainer.remove();
        });

        displayAddCart.addEventListener('click', addToCart);
        bodyTag.appendChild(disContainer);
    }
    
    addCart.addEventListener('click', addToCart);
    prodContent.addEventListener("click", createProdDisplay);
    
    return prodCard;
}

function cardAdder(fprods){
    fprods.forEach(
        (item) => {
            let card = cardCreator(item)
            prod_row.appendChild(card);           
        }
    )
    
}

function prodAdder(prodspage) {
    prodspage.forEach(
        (item) => {
            let cards = cardCreator(item);
            products_row.appendChild(cards);
        }
    )
}

const filterButtons = document.querySelectorAll("#filters .btn");

filterButtons.forEach(el => {
    el.addEventListener("click", e => handleEvent(e))
})

function handleEvent(e){
    let target = e.target;
    e.preventDefault;
    filterButtons.forEach(el => {
        el.classList.remove("active");
    })

    target.classList.add("active");

    prodFilter(target.dataset.filter);
}

function prodFilter(prods){
    const allPro = document.querySelectorAll(".prodCard");
    if(prods == "All"){
        allPro.forEach(el => {
            el.style.display = "";
        })
    } else {
        allPro.forEach(el => {
            if(el.classList[1] == prods){
                el.style.display = "";
            } else {
                el.style.display = "none";
            }
        })
    }
}

function showHidePassword(){
    let password = document.getElementById("password");

    if(password.type === 'password') {
        password.type = 'text';
    } else{
        password.type = 'password';
    }
}
