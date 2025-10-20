export default {
  title: {
    type: 'text',
    content: 'Example document',
    styles: [],
  },
  contentElements: [
    {
      type: 'chapter',
      title: {
        type: 'text',
        content: 'First chapter',
        styles: [],
      },
      contentElements: [
        {
          type: 'section',
          title: {
            type: 'text',
            content: 'First section',
            styles: [],
          },
          label: '1',
          contentElements: [
            {
              type: 'paragraph',
              contentElements: [
                {
                  type: 'text',
                  content:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                  styles: [],
                },
                {
                  type: 'bigskip',
                },
                {
                  type: 'weblink',
                  url: 'https://www.lipsum.com',
                  displayText: {
                    type: 'text',
                    content: 'Lorem Ipsum',
                    styles: [],
                  },
                },
                {
                  type: 'text',
                  content:
                    ' has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  styles: [],
                },
                {
                  type: 'text',
                  content: ' This is a bold and italic example. ',
                  styles: ['BOLD', 'ITALIC'],
                },
                {
                  type: 'internalReference',
                  referencedLabel: 'tableReference',
                  displayText: {
                    type: 'text',
                    content: 'This should take you to the table in the section below.',
                    styles: [],
                  },
                },
                {
                  type: 'paragraph',
                  contentElements: [
                    {
                      type: 'text',
                      content: 'Below we have a list of items:',
                      styles: [],
                    },
                  ],
                },
                {
                  type: 'list',
                  style: {
                    ordered: true,
                  },
                  items: [
                    {
                      content: [
                        {
                          type: 'text',
                          content: 'First item in bold and italic.',
                          styles: ['BOLD', 'ITALIC'],
                        },
                      ],
                      subList: null,
                    },
                    {
                      content: [
                        {
                          type: 'text',
                          content: 'Second item with a nested list:',
                          styles: [],
                        },
                      ],
                      subList: {
                        type: 'list',
                        style: {
                          ordered: false,
                        },
                        items: [
                          {
                            content: [
                              {
                                type: 'text',
                                content: 'First sub-item in the nested list.',
                                styles: [],
                              },
                            ],
                            subList: null,
                          },
                          {
                            content: [
                              {
                                type: 'internalReference',
                                referencedLabel: '2',
                                displayText: {
                                  type: 'text',
                                  content: 'Second section reference',
                                  styles: [],
                                },
                              },
                            ],
                            subList: null,
                          },
                          {
                            content: [
                              {
                                type: 'text',
                                content: 'Third sub-item with another nested list:',
                                styles: [],
                              },
                            ],
                            subList: {
                              type: 'list',
                              style: {
                                ordered: true,
                              },
                              items: [
                                {
                                  content: [
                                    {
                                      type: 'text',
                                      content: 'First sub-sub-item in the deeper list.',
                                      styles: [],
                                    },
                                  ],
                                  subList: null,
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'section',
          title: {
            type: 'text',
            content: 'Second section',
            styles: [],
          },
          label: '2',
          contentElements: [
            {
              type: 'paragraph',
              contentElements: [
                {
                  type: 'internalReference',
                  referencedLabel: 'tableReference',
                  displayText: {
                    type: 'text',
                    content: 'This should take you to the table below.',
                    styles: [],
                  },
                },
                {
                  type: 'text',
                  content:
                    'This paragraph provides additional placeholder text for the second section.',
                  styles: [],
                },
                {
                  type: 'weblink',
                  url: 'https://www.example.com',
                  displayText: {
                    type: 'text',
                    content: 'Example Link',
                    styles: [],
                  },
                },
                {
                  type: 'text',
                  content: ' It serves as a distinct piece of content for testing purposes.',
                  styles: [],
                },
                {
                  type: 'table',
                  rows: [
                    [
                      {
                        elements: [
                          {
                            type: 'text',
                            content: 'Row 1',
                            styles: ['BOLD'],
                          },
                        ],
                      },
                      {
                        elements: [
                          {
                            type: 'text',
                            content: 'We have a website here',
                            styles: [],
                          },
                          {
                            type: 'breakline',
                          },
                          {
                            type: 'weblink',
                            url: 'https://www.exampleurlgoeshere.com',
                            displayText: null,
                          },
                        ],
                      },
                    ],
                    [
                      {
                        elements: [
                          {
                            type: 'text',
                            content: 'Row 2',
                            styles: ['BOLD'],
                          },
                        ],
                      },
                      {
                        elements: [
                          {
                            type: 'text',
                            content: 'Just some text on the first line',
                            styles: [],
                          },
                          {
                            type: 'breakline',
                          },
                          {
                            type: 'text',
                            content: 'Just some text on the next line',
                            styles: [],
                          },
                        ],
                      },
                    ],
                  ],
                  titlePrefix: {
                    type: 'text',
                    content: '1.',
                    styles: [],
                  },
                  title: {
                    type: 'text',
                    content: 'Sample Table',
                    styles: [],
                  },
                  style: {
                    columnSizes: ['SMALL', 'LARGE'],
                    alignment: 'LEFT',
                  },
                  label: 'tableReference',
                },
              ],
            },
            {
              type: 'section',
              title: {
                type: 'text',
                content: 'This is a section inside the second section',
                styles: [],
              },
              label: '1',
              contentElements: [
                {
                  type: 'paragraph',
                  contentElements: [
                    {
                      type: 'text',
                      content: 'This is unique content for a subsection paragraph.',
                      styles: [],
                    },
                  ],
                },
                {
                  type: 'section',
                  title: {
                    type: 'text',
                    content: 'This is a subsection ',
                    styles: [],
                  },
                  label: '1',
                  contentElements: [
                    {
                      type: 'paragraph',
                      contentElements: [
                        {
                          type: 'text',
                          content: 'This is placeholder text for a nested subsection.',
                          styles: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'section',
              title: {
                type: 'text',
                content: 'This is another section inside the second section',
                styles: [],
              },
              label: '1',
              contentElements: [
                {
                  type: 'paragraph',
                  contentElements: [
                    {
                      type: 'text',
                      content: 'This paragraph contains additional distinct mock text.',
                      styles: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
