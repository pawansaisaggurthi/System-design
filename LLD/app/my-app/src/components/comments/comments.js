import CommentsBox from './CommentsBox';

const data1 = [
    {
        userName: "Pawan",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
            {
                userName: "Sai",
                comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit"
            },
            {
                userName: "Kumar",
                comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                replies: [
                    {
                        userName: "Sai",
                        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                        replies: [
                            {
                                userName: "Sai",
                                comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                                replies: [
                                    {
                                        userName: "Sai",
                                        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit"
                                    },]
                            },]
                    }
                ]
            }
        ]
    },
    {
        userName: "Sai",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit"
    },
    {
        userName: "Kumar",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
            {
                userName: "Sai",
                comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                replies: [
                    {
                        userName: "Sai",
                        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                        replies: [
                            {
                                userName: "Sai",
                                comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                                replies: [
                                    {
                                        userName: "Sai",
                                        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                                        replies: [
                                            {
                                                userName: "Sai",
                                                comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                                                replies: [
                                                    {
                                                        userName: "Sai",
                                                        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit"
                                                    },]
                                            },]
                                    }
                                ]
                            },]
                    },]
            }
        ]
    }
]

const data = [
  {
    userName: "Akshay Saini",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        userName: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
    ],
  },
  {
    userName: "Elon Musk",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        userName: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
          {
            userName: "Deepika Padukone",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            replies: [
              {
                userName: "Deepika Padukone",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                replies: [
                  {
                    userName: "Deepika Padukone",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                    replies: [
                      {
                        userName: "Deepika Padukone",
                        comment:
                          "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                        replies: [
                          {
                            userName: "Deepika Padukone",
                            comment:
                              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            userName: "Deepika Padukone",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          },
        ],
      },
      {
        userName: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
    ],
  },
  {
    userName: "Sachin Tendulkar",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
  },
];

const Comments = () => {

    return <div className='w-50% m-auto'><CommentsBox data={data}/></div>

}

export default Comments;