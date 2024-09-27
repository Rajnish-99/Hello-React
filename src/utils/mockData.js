const resList = [
  {
    info: {
      id: "360507",
      name: "Burger Farm",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_360507.JPG",
      locality: "Sardarpura",
      areaName: "Sardarpura",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "Ice Cream"],
      avgRating: 4.5,
      parentId: "4660",
      avgRatingString: "4.5",
      totalRatingsString: "9.3K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "89938",
      name: "The Belgian Waffle CO.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "Sardarpura",
      areaName: "Sardarpura",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "798555",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_798555.JPG",
      locality: "Sardarpura",
      areaName: "Jodhpur",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "2.4K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "90004",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/f661a2a9-6133-417f-b195-d5dffa4d5ead_90004.JPG",
      locality: "Ratanada",
      areaName: "Ratanada",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks"],
      avgRating: 4.1,
      parentId: "2",
      avgRatingString: "4.1",
      totalRatingsString: "4.5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "408499",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_408499.JPG",
      locality: "Sardarpura",
      areaName: "Sardarpura",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "3.8K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "84978",
      name: "Janta Sweet Home",
      cloudinaryImageId: "rlenzselbe4oeykdco4m",
      locality: "Station Road\t",
      areaName: "Station Road",
      costForTwo: "₹200 for two",
      cuisines: [
        "Sweets",
        "South Indian",
        "Desserts",
        "Pizzas",
        "Burgers",
        "Ice Cream",
        "Snacks",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "109712",
      avgRatingString: "4.5",
      totalRatingsString: "31K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "92219",
      name: "Jantawala Sweets And Restaurant",
      cloudinaryImageId: "a4mmkjp4npgo9wb8sge8",
      locality: "Sardarpura",
      areaName: "Sardarpura",
      costForTwo: "₹250 for two",
      cuisines: ["Fast Food", "South Indian", "Pizzas", "Sweets", "Thalis"],
      avgRating: 4.1,
      veg: true,
      parentId: "109729",
      avgRatingString: "4.1",
      totalRatingsString: "59K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "85307",
      name: "Parihaar Bhojnalay",
      cloudinaryImageId: "rrgtux8aovbthuw4v46s",
      locality: "Sardarpura",
      areaName: "Sardarpura",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Thalis", "Rajasthani", "Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "155607",
      avgRatingString: "4.4",
      totalRatingsString: "41K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "94193",
      name: "Shree Kissan Bhojnalay",
      cloudinaryImageId: "9cd90a46f1b69b04f090723a872097ef",
      locality: "Sardarpura",
      areaName: "12th Road Circle",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Rajasthani",
        "Indian",
        "South Indian",
        "Beverages",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "184896",
      avgRatingString: "4.3",
      totalRatingsString: "4.6K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "562886",
      name: "De Babu Bhai Cloud Kitchen",
      cloudinaryImageId: "tkcdyxdqr6hhbxqmdzpy",
      areaName: "Sardarpura",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "455772",
      avgRatingString: "4.6",
      totalRatingsString: "2.4K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
];

export default resList;
