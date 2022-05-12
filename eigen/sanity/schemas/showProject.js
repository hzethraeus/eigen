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
      },
      {
          name: 'longerDesc',
          type:'text',
          title: 'Longer Description'
      },
      {
          name:'techstack',
          type:'string',
          title: 'Techstack'
      },
      {
          name:'link',
          type:'string',
          title: 'Live Link'
      }

    ]
  }