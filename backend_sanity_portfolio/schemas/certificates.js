export default {
    name: 'certificates',
    title: 'certificates',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'certificateLink',
        title: 'Certificate Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'Certificate Url',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };