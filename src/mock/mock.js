/* eslint-disable */
export const data = [
  {
    tagId: 21,
    parentTagId: null,
    label: "人口属性",
    operatorList: null,
    value: "TAG_PEOPLE",
    children: [
      {
        tagId: 34,
        parentTagId: 21,
        label: "社会属性",
        operatorList: null,
        value: "TAG_PEOPLE_SOCIAL",
        children: [
          {
            tagId: 36,
            parentTagId: 34,
            label: "城市",
            operatorList: ["eq", "neq", "in", "nin"],
            value: "TAG_PEOPLE_SOCIAL_CITY",
            children: null
          },
          {
            tagId: 41,
            parentTagId: 34,
            label: "省份",
            operatorList: ["eq", "neq", "in", "nin"],
            value: "TAG_PEOPLE_SOCIAL_PROVINCE",
            children: null
          }
        ]
      },
      {
        tagId: 38,
        parentTagId: 21,
        label: "设备",
        operatorList: null,
        value: "TAG_PEOPLE_DEV",
        children: [
          {
            tagId: 39,
            parentTagId: 38,
            label: "手机品牌",
            operatorList: ["eq", "neq", "in", "nin"],
            value: "TAG_PEOPLE_DEV_PHONE_BRAND",
            children: null
          }
        ]
      },
      {
        tagId: 22,
        parentTagId: 21,
        label: "自然属性",
        operatorList: null,
        value: "TAG_PEOPLE_NATURE",
        children: [
          {
            tagId: 23,
            parentTagId: 22,
            label: "性别",
            operatorList: ["eq", "neq", "in", "nin"],
            value: "TAG_PEOPLE_NATURE_GENDER",
            children: null
          }
        ]
      }
    ]
  },
  {
    tagId: 27,
    parentTagId: null,
    label: "用户行为",
    operatorList: null,
    value: "TAG_BEHAVIOR",
    children: [
      {
        tagId: 48,
        parentTagId: 27,
        label: "登录",
        operatorList: null,
        value: "TAG_BEHAVIOR_LOGIN",
        children: [
          {
            tagId: 51,
            parentTagId: 48,
            label: "3号平台最近7天登录天数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_LOGIN_7D_DAYS_3",
            children: null
          },
          {
            tagId: 52,
            parentTagId: 48,
            label: "4号平台最近7天登录天数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_LOGIN_7D_DAYS_4",
            children: null
          }
        ]
      },
      {
        tagId: 71,
        parentTagId: 27,
        label: "退单",
        operatorList: null,
        value: "TAG_BEHAVIOR_REFUND",
        children: [
          {
            tagId: 72,
            parentTagId: 71,
            label: "3号平台最近1日退单次数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_REFUND_NUM_1D_3",
            children: null
          },
          {
            tagId: 73,
            parentTagId: 71,
            label: "4号平台最近1日退单次数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_REFUND_NUM_1D_4",
            children: null
          },
          {
            tagId: 74,
            parentTagId: 71,
            label: "3号平台最近7日退单次数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_REFUND_NUM_7D_3",
            children: null
          },
          {
            tagId: 75,
            parentTagId: 71,
            label: "4号平台最近7日退单次数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_REFUND_NUM_7D_4",
            children: null
          }
        ]
      },
      {
        tagId: 53,
        parentTagId: 27,
        label: "浏览",
        operatorList: null,
        value: "TAG_BEHAVIOR_BROWSE",
        children: [
          {
            tagId: 60,
            parentTagId: 53,
            label: "3号平台最近7日浏览页面数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_BROWSE_PAGES_NUM_7D_3",
            children: null
          },
          {
            tagId: 61,
            parentTagId: 53,
            label: "4号平台最近7日浏览页面数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_BROWSE_PAGES_NUM_7D_4",
            children: null
          },
          {
            tagId: 59,
            parentTagId: 53,
            label: "4号平台最近1日浏览页面数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_BROWSE_PAGES_NUM_1D_4",
            children: null
          },
          {
            tagId: 54,
            parentTagId: 53,
            label: "3号平台最近1日浏览时长",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_BROWSE_DURING_1D_3",
            children: null
          },
          {
            tagId: 55,
            parentTagId: 53,
            label: "4号平台最近1日浏览时长",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_BROWSE_DURING_1D_4",
            children: null
          },
          {
            tagId: 56,
            parentTagId: 53,
            label: "3号平台最近7日浏览时长",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_BROWSE_DURING_7D_3",
            children: null
          },
          {
            tagId: 57,
            parentTagId: 53,
            label: "4号平台最近7日浏览时长",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_BROWSE_DURING_7D_4",
            children: null
          },
          {
            tagId: 58,
            parentTagId: 53,
            label: "3号平台最近1日浏览页面数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_BROWSE_PAGES_NUM_1D_3",
            children: null
          }
        ]
      },
      {
        tagId: 62,
        parentTagId: 27,
        label: "下单",
        operatorList: null,
        value: "TAG_BEHAVIOR_ORDER",
        children: [
          {
            tagId: 63,
            parentTagId: 62,
            label: "3号平台最近1日下单次数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_ORDER_NUM_1D_3",
            children: null
          },
          {
            tagId: 64,
            parentTagId: 62,
            label: "4号平台最近1日下单次数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_ORDER_NUM_1D_4",
            children: null
          },
          {
            tagId: 65,
            parentTagId: 62,
            label: "3号平台最近7日下单次数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_ORDER_NUM_7D_3",
            children: null
          },
          {
            tagId: 66,
            parentTagId: 62,
            label: "4号平台最近7日下单次数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_ORDER_NUM_7D_4",
            children: null
          },
          {
            tagId: 67,
            parentTagId: 62,
            label: "3号平台最近1日下单金额",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_ORDER_AMOUNT_1D_3",
            children: null
          },
          {
            tagId: 68,
            parentTagId: 62,
            label: "4号平台最近1日下单金额",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_ORDER_AMOUNT_1D_4",
            children: null
          },
          {
            tagId: 69,
            parentTagId: 62,
            label: "3号平台最近7日下单金额",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_ORDER_AMOUNT_7D_3",
            children: null
          },
          {
            tagId: 70,
            parentTagId: 62,
            label: "4号平台最近7日下单金额",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_ORDER_AMOUNT_7D_4",
            children: null
          }
        ]
      },
      {
        tagId: 29,
        parentTagId: 27,
        label: "支付",
        operatorList: null,
        value: "TAG_BEHAVIOR_PAY",
        children: [
          {
            tagId: 79,
            parentTagId: 29,
            label: "4号平台总消费金额",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_TOTAL_AMOUNT_4",
            children: null
          },
          {
            tagId: 76,
            parentTagId: 29,
            label: "3号平台总消费次数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_TOTAL_NUM_3",
            children: null
          },
          {
            tagId: 77,
            parentTagId: 29,
            label: "4号平台总消费次数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_TOTAL_NUM_4",
            children: null
          },
          {
            tagId: 78,
            parentTagId: 29,
            label: "3号平台总消费金额",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_TOTAL_AMOUNT_3",
            children: null
          },
          {
            tagId: 43,
            parentTagId: 29,
            label: "3号平台最近1日支付数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_1D_NUM_3",
            children: null
          },
          {
            tagId: 30,
            parentTagId: 29,
            label: "3号平台最近7日支付金额",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_7D_AMOUNT_3",
            children: null
          },
          {
            tagId: 31,
            parentTagId: 29,
            label: "3号平台最近7日支付数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_7D_NUM_3",
            children: null
          },
          {
            tagId: 32,
            parentTagId: 29,
            label: "4号平台最近7日支付金额",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_7D_AMOUNT_4",
            children: null
          },
          {
            tagId: 33,
            parentTagId: 29,
            label: "4号平台最近7日支付数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_7D_NUM_4",
            children: null
          },
          {
            tagId: 42,
            parentTagId: 29,
            label: "4号平台最近1日支付数",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_1D_NUM_4",
            children: null
          },
          {
            tagId: 44,
            parentTagId: 29,
            label: "3号平台最近1日支付金额",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_1D_AMOUNT_3",
            children: null
          },
          {
            tagId: 45,
            parentTagId: 29,
            label: "4号平台最近1日支付金额",
            operatorList: ["eq", "gte", "lte", "gt", "lt", "neq", "in", "nin"],
            value: "TAG_BEHAVIOR_PAY_1D_AMOUNT_4",
            children: null
          }
        ]
      }
    ]
  },
  {
    tagId: 37,
    parentTagId: null,
    label: "用户偏好",
    operatorList: null,
    value: "TAG_FAVOR",
    children: null
  }
];
