const data = [
  {
    id: 1,
    name: "ALPINE SKIING",
    topic: "ALPINE SKIING",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/ivjkop65yizrjtxqj1zd",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_480/f_auto/v1538355600/primary/rougxpqbyxbacwpbobzj",
  },
  {
    id: 2,
    name: "BIATHLON",
    topic: "BIATHLON",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/nebyspwtzhjofzrors8w",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_480/f_auto/v1538355600/primary/ssvzbxhxh35bnnod7h6u",
  },
  {
    id: 3,
    name: "CANOE FLATWATER",
    topic: "CANOE FLATWATER",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/ujorb9zxsun0us3vjikc",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1538355600/primary/wwyv4uoax7jejlawvwmz",
  },
  {
    id: 4,
    name: "CYCLING ROAD",
    topic: "CYCLING ROAD",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/plzd2xixjvo90ocnpl8z",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1630936903/primary/q7auyupjvwhk4xln9tnx",
  },
  {
    id: 5,
    name: "DIVING",
    topic: "DIVING",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/v26jknqcyoe6bqaug9xv",

    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1538355600/primary/kszdy9zd8cchlql2vanu",
  },
  {
    id: 6,
    name: "Beach Volleyball",
    topic: "Beach Volleyball",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/hd7ytq34vaz3bbaaareq",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1538355600/primary/fzd0cj7ous7hf0gqo5dg",
  },
  {
    id: 7,
    name: "Basketball",
    topic: "Basketball",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/onnla3tn4re52ydvzntt",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1668613158/primary/oo36twekciqogi7th0eq",
  },
  {
    id: 8,
    name: "EQUESTRIAN",
    topic: "EQUESTRIAN",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/lylndttv5tavpd9buhp1",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1668617609/primary/lkpwxvxdpgu0vtcmmnrm",
  },
  {
    id: 9,
    name: "FIGURE SKATING",
    topic: "FIGURE SKATING",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/svxbkgjvdp93kjabvkpx",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1683111692/primary/yplby17ggkqjwsgqq3fh",
  },
  {
    id: 10,
    name: "FOOTBALL",
    topic: "FOOTBALL",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/fkqvl8n9i0cchfzb7uph",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1668614511/primary/wxfgxa25ntn1y8pp9uuv",
  },
  {
    id: 11,
    name: "SKATEBOARDING",
    topic: "SKATEBOARDING",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/fhyykuxuyfxqo2xfn0ul",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1538355600/primary/dahls0gnhjqvk0i8yykq",
  },
  {
    id: 12,
    name: "MARATHON SWIMMING",
    topic: "MARATHON SWIMMING",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/v26jknqcyoe6bqaug9xv",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1538355600/primary/cyzhqqukwb5flvhmuzcl",
  },
  {
    id: 13,
    name: "TAEKWONDO",
    topic: "TAEKWONDO",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/gpfdyjpnfqcmifsxfgj5",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1668614228/primary/ij1opbprknioaoxoqjmp",
  },
  {
    id: 14,
    name: "Boxing",
    topic: "Boxing",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/kuyxmkmlj7zvn5dubyiu",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_480/f_auto/v1538355600/primary/td1zgnmqskjib6j8c5zb",
  },
  {
    id: 15,
    name: "FENCING",
    topic: "FENCING",
    flyer:
      "https://img.olympicchannel.com/images/image/private/t_1-1_150/f_auto/v1538355600/primary/kfhzsmtntkgbjtdxz0lb",
    image:
      "https://img.olympicchannel.com/images/image/private/t_16-9_760/f_auto/v1668617476/primary/igr2r1cl1shgna5itint",
  },
];
export default data;
