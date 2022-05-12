export default {
    name: 'projects',
    type: 'document',
      title: 'Projects',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
          name:'images',
          title:'Images',
          type: 'array',
          of: [{ type: 'image' }]
      },
      {
          name:'description',
          type:'string',
          title: 'Description'
      }

    ]
  }