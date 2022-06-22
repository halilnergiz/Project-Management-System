const items = [
  {
    title: 'Projects >',
    icon: "bi-gear-fill",
    // path: "/#/projects",

    childrens: [
      {
        title: 'XferData >',
        icon: "bi-gear-fill",


        childrens: {
          title: 'XferDataRepo >',
          icon: "bi-gear-fill",


          childrens: [
            {
              title: 'Payment',

            },
            {
              title: 'Data Service',

            },
            {
              title: 'Logger Service'
            }
          ]

        }

      },
      {
        title: 'MultiRepo Project >',
        icon: "bi-gear-fill",

        childrens: [
          {
            title: 'microservice-1'
          },
          {
            title: 'microservice-2'
          },
          {
            title: 'microservice-3'
          },
          {
            title: 'Front-End'
          }
        ]

      }
    ]

  },

]

export default items;