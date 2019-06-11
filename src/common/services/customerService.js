const customers = [
  {
    id: 1,
    name: "Cement Constructions Pyt Ltd",
    address: {
      number: "30",
      street: "Greenwood Parkway",
      suburb: "Jordan Springs",
      postCode: "2747",
      state: "NSW"
    },
    phone: "0402234679"
  },
  {
    id: 2,
    name: "Hedgehog Landscaping Pyt Ltd",
    address: {
      number: "01",
      street: "High street",
      suburb: "Parkle",
      postCode: "2756",
      state: "NSW"
    },
    phone: "040223466"
  },
  {
    id: 3,
    name: "Amber Kitchen Pyt Ltd",
    address: {
      number: "4",
      street: "Cox street",
      suburb: "Penrith",
      postCode: "2745",
      state: "NSW"
    },
    phone: "0295647852"
  },
  {
    id: 4,
    name: "Amber Kitchen Pyt Ltd",
    address: {
      number: "4",
      street: "Cox street",
      suburb: "Penrith",
      postCode: "2745",
      state: "NSW"
    },
    phone: "0295647852"
  },
  {
    id: 5,
    name: "Amber Kitchen Pyt Ltd",
    address: {
      number: "4",
      street: "Cox street",
      suburb: "Penrith",
      postCode: "2745",
      state: "NSW"
    },
    phone: "0295647852"
  },
  {
    id: 6,
    name: "Amber Kitchen Pyt Ltd",
    address: {
      number: "4",
      street: "Cox street",
      suburb: "Penrith",
      postCode: "2745",
      state: "NSW"
    },
    phone: "0295647852"
  },
  {
    id: 7,
    name: "Amber Kitchen Pyt Ltd",
    address: {
      number: "4",
      street: "Cox street",
      suburb: "Penrith",
      postCode: "2745",
      state: "NSW"
    },
    phone: "0295647852"
  },
  {
    id: 8,
    name: "Amber Kitchen Pyt Ltd",
    address: {
      number: "4",
      street: "Cox street",
      suburb: "Penrith",
      postCode: "2745",
      state: "NSW"
    },
    phone: "0295647852"
  },
  {
    id: 9,
    name: "Amber Kitchen Pyt Ltd",
    address: {
      number: "4",
      street: "Cox street",
      suburb: "Penrith",
      postCode: "2745",
      state: "NSW"
    },
    phone: "0295647852"
  },
  {
    id: 10,
    name: "Plastic Magic Pyt Ltd",
    address: {
      number: "234",
      street: "Glasic Avenue",
      suburb: "Gleenwood",
      postCode: "2536",
      state: "NSW"
    },
    phone: "0295986452"
  },
  {
    id: 11,
    name: "Prdudential Realstate Pyt Ltd",
    address: {
      number: "108",
      street: "Lincon street",
      suburb: "South Penrith",
      postCode: "2745",
      state: "NSW"
    },
    phone: "0297548205"
  }
];

export function getCustomers() {
  return customers;
}

export function getCustomer(id) {
  return customers.find(c => c.id === id);
}
