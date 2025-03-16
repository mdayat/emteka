import { ComponentPropsWithRef } from "react";

export function TryFreeIcon({ className = "" }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 130 57"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_128_5400)">
        <mask id="path-1-inside-1_128_5400" fill="white">
          <path d="M113.463 4H120.972C122.328 4 123.428 5.09961 123.428 6.45605V8.91211H113.463V4Z" />
        </mask>
        <path
          d="M113.463 4H120.972C122.328 4 123.428 5.09961 123.428 6.45605V8.91211H113.463V4Z"
          fill="#9E211C"
        />
        <path
          d="M113.463 2H120.972C123.433 2 125.428 3.99504 125.428 6.45605H121.428C121.428 6.20418 121.224 6 120.972 6H113.463V2ZM123.428 8.91211H113.463H123.428ZM113.463 8.91211V4V8.91211ZM120.972 2C123.433 2 125.428 3.99504 125.428 6.45605V8.91211H121.428V6.45605C121.428 6.20418 121.224 6 120.972 6V2Z"
          fill="#D94843"
          mask="url(#path-1-inside-1_128_5400)"
        />
        <path
          d="M6.42773 12.9121C6.42773 10.703 8.2186 8.91211 10.4277 8.91211H123.428V44.9121C123.428 47.1212 121.637 48.9121 119.428 48.9121H10.4277C8.2186 48.9121 6.42773 47.1213 6.42773 44.9121V12.9121Z"
          fill="#D94843"
        />
        <path
          d="M20.2377 35.1101C18.8697 35.1101 17.6997 34.8401 16.7277 34.3001C15.7557 33.7601 15.0057 33.0041 14.4777 32.0321C13.9617 31.0481 13.7037 29.8901 13.7037 28.5581C13.7037 27.5621 13.8477 26.6681 14.1357 25.8761C14.4357 25.0721 14.8677 24.3881 15.4317 23.8241C15.9957 23.2481 16.6797 22.8041 17.4837 22.4921C18.2997 22.1801 19.2177 22.0241 20.2377 22.0241C20.8377 22.0241 21.4437 22.1021 22.0557 22.2581C22.6797 22.4021 23.2197 22.6121 23.6757 22.8881C23.9757 23.0561 24.1797 23.2661 24.2877 23.5181C24.3957 23.7701 24.4257 24.0221 24.3777 24.2741C24.3417 24.5261 24.2397 24.7421 24.0717 24.9221C23.9157 25.1021 23.7177 25.2161 23.4777 25.2641C23.2377 25.3121 22.9677 25.2581 22.6677 25.1021C22.3077 24.8861 21.9297 24.7301 21.5337 24.6341C21.1377 24.5381 20.7357 24.4901 20.3277 24.4901C19.5237 24.4901 18.8457 24.6521 18.2937 24.9761C17.7537 25.2881 17.3457 25.7441 17.0697 26.3441C16.7937 26.9441 16.6557 27.6821 16.6557 28.5581C16.6557 29.4221 16.7937 30.1601 17.0697 30.7721C17.3457 31.3841 17.7537 31.8521 18.2937 32.1761C18.8457 32.4881 19.5237 32.6441 20.3277 32.6441C20.7117 32.6441 21.1017 32.5961 21.4977 32.5001C21.9057 32.4041 22.2957 32.2541 22.6677 32.0501C22.9797 31.8941 23.2557 31.8401 23.4957 31.8881C23.7477 31.9241 23.9517 32.0321 24.1077 32.2121C24.2757 32.3801 24.3777 32.5841 24.4137 32.8241C24.4617 33.0641 24.4377 33.3041 24.3417 33.5441C24.2457 33.7841 24.0657 33.9881 23.8017 34.1561C23.3577 34.4561 22.8117 34.6901 22.1637 34.8581C21.5157 35.0261 20.8737 35.1101 20.2377 35.1101ZM29.7676 35.1101C28.8196 35.1101 27.9916 34.9241 27.2836 34.5521C26.5876 34.1801 26.0476 33.6461 25.6636 32.9501C25.2796 32.2541 25.0876 31.4321 25.0876 30.4841C25.0876 29.7761 25.1956 29.1401 25.4116 28.5761C25.6276 28.0121 25.9396 27.5321 26.3476 27.1361C26.7676 26.7281 27.2656 26.4221 27.8416 26.2181C28.4176 26.0021 29.0596 25.8941 29.7676 25.8941C30.7156 25.8941 31.5376 26.0801 32.2336 26.4521C32.9416 26.8241 33.4876 27.3521 33.8716 28.0361C34.2676 28.7201 34.4656 29.5361 34.4656 30.4841C34.4656 31.2041 34.3516 31.8461 34.1236 32.4101C33.9076 32.9741 33.5956 33.4601 33.1876 33.8681C32.7796 34.2761 32.2816 34.5881 31.6936 34.8041C31.1176 35.0081 30.4756 35.1101 29.7676 35.1101ZM29.7676 33.0761C30.1636 33.0761 30.5056 32.9801 30.7936 32.7881C31.0816 32.5961 31.3096 32.3141 31.4776 31.9421C31.6456 31.5581 31.7296 31.0721 31.7296 30.4841C31.7296 29.6081 31.5496 28.9661 31.1896 28.5581C30.8296 28.1381 30.3556 27.9281 29.7676 27.9281C29.3836 27.9281 29.0416 28.0181 28.7416 28.1981C28.4536 28.3781 28.2256 28.6601 28.0576 29.0441C27.9016 29.4161 27.8236 29.8961 27.8236 30.4841C27.8236 31.3601 28.0036 32.0141 28.3636 32.4461C28.7236 32.8661 29.1916 33.0761 29.7676 33.0761ZM41.5732 35.1101C40.8652 35.1101 40.2352 34.9361 39.6832 34.5881C39.1432 34.2281 38.7832 33.7541 38.6032 33.1661L38.8012 32.5721V33.6881C38.8012 34.1321 38.6872 34.4741 38.4592 34.7141C38.2312 34.9541 37.9012 35.0741 37.4692 35.0741C37.0372 35.0741 36.7012 34.9541 36.4612 34.7141C36.2332 34.4741 36.1192 34.1321 36.1192 33.6881V23.4461C36.1192 22.9901 36.2332 22.6481 36.4612 22.4201C36.7012 22.1801 37.0432 22.0601 37.4872 22.0601C37.9192 22.0601 38.2492 22.1801 38.4772 22.4201C38.7172 22.6481 38.8372 22.9901 38.8372 23.4461V27.7121H38.6212C38.8132 27.1721 39.1792 26.7341 39.7192 26.3981C40.2592 26.0621 40.8772 25.8941 41.5732 25.8941C42.3532 25.8941 43.0312 26.0801 43.6072 26.4521C44.1832 26.8241 44.6332 27.3521 44.9572 28.0361C45.2812 28.7201 45.4432 29.5361 45.4432 30.4841C45.4432 31.4321 45.2812 32.2541 44.9572 32.9501C44.6332 33.6461 44.1772 34.1801 43.5892 34.5521C43.0132 34.9241 42.3412 35.1101 41.5732 35.1101ZM40.7632 33.0761C41.1472 33.0761 41.4832 32.9801 41.7712 32.7881C42.0712 32.5961 42.2992 32.3141 42.4552 31.9421C42.6232 31.5581 42.7072 31.0721 42.7072 30.4841C42.7072 29.6081 42.5272 28.9661 42.1672 28.5581C41.8072 28.1381 41.3392 27.9281 40.7632 27.9281C40.3792 27.9281 40.0372 28.0181 39.7372 28.1981C39.4492 28.3781 39.2212 28.6601 39.0532 29.0441C38.8852 29.4161 38.8012 29.8961 38.8012 30.4841C38.8012 31.3601 38.9812 32.0141 39.3412 32.4461C39.7012 32.8661 40.1752 33.0761 40.7632 33.0761ZM50.0935 35.1101C49.4455 35.1101 48.8635 34.9841 48.3475 34.7321C47.8315 34.4801 47.4295 34.1381 47.1415 33.7061C46.8535 33.2741 46.7095 32.7881 46.7095 32.2481C46.7095 31.6001 46.8775 31.0901 47.2135 30.7181C47.5495 30.3341 48.0955 30.0641 48.8515 29.9081C49.6075 29.7401 50.6095 29.6561 51.8575 29.6561H52.8115V31.0601H51.8755C51.2635 31.0601 50.7655 31.0961 50.3815 31.1681C50.0095 31.2281 49.7395 31.3361 49.5715 31.4921C49.4155 31.6481 49.3375 31.8641 49.3375 32.1401C49.3375 32.4761 49.4515 32.7521 49.6795 32.9681C49.9195 33.1841 50.2615 33.2921 50.7055 33.2921C51.0535 33.2921 51.3595 33.2141 51.6235 33.0581C51.8995 32.8901 52.1155 32.6681 52.2715 32.3921C52.4275 32.1041 52.5055 31.7801 52.5055 31.4201V29.3501C52.5055 28.8221 52.3855 28.4501 52.1455 28.2341C51.9055 28.0061 51.4975 27.8921 50.9215 27.8921C50.5975 27.8921 50.2435 27.9341 49.8595 28.0181C49.4875 28.0901 49.0735 28.2161 48.6175 28.3961C48.3535 28.5161 48.1195 28.5461 47.9155 28.4861C47.7115 28.4141 47.5555 28.2941 47.4475 28.1261C47.3395 27.9461 47.2855 27.7541 47.2855 27.5501C47.2855 27.3341 47.3455 27.1301 47.4655 26.9381C47.5855 26.7341 47.7835 26.5841 48.0595 26.4881C48.6235 26.2601 49.1515 26.1041 49.6435 26.0201C50.1475 25.9361 50.6095 25.8941 51.0295 25.8941C51.9535 25.8941 52.7095 26.0321 53.2975 26.3081C53.8975 26.5721 54.3475 26.9861 54.6475 27.5501C54.9475 28.1021 55.0975 28.8161 55.0975 29.6921V33.6881C55.0975 34.1321 54.9895 34.4741 54.7735 34.7141C54.5575 34.9541 54.2455 35.0741 53.8375 35.0741C53.4295 35.0741 53.1115 34.9541 52.8835 34.7141C52.6675 34.4741 52.5595 34.1321 52.5595 33.6881V33.0221L52.6855 33.1301C52.6135 33.5381 52.4575 33.8921 52.2175 34.1921C51.9895 34.4801 51.6955 34.7081 51.3355 34.8761C50.9755 35.0321 50.5615 35.1101 50.0935 35.1101ZM68.6684 35.1101C67.2404 35.1101 66.0284 34.8401 65.0324 34.3001C64.0484 33.7601 63.2984 33.0041 62.7824 32.0321C62.2664 31.0601 62.0084 29.9201 62.0084 28.6121C62.0084 27.6041 62.1584 26.6981 62.4584 25.8941C62.7704 25.0781 63.2144 24.3881 63.7904 23.8241C64.3784 23.2481 65.0864 22.8041 65.9144 22.4921C66.7544 22.1801 67.7024 22.0241 68.7584 22.0241C69.4064 22.0241 70.0544 22.0961 70.7024 22.2401C71.3504 22.3841 71.9744 22.6241 72.5744 22.9601C72.8264 23.1041 72.9944 23.2901 73.0784 23.5181C73.1744 23.7341 73.1984 23.9681 73.1504 24.2201C73.1144 24.4601 73.0184 24.6761 72.8624 24.8681C72.7184 25.0481 72.5264 25.1681 72.2864 25.2281C72.0584 25.2761 71.7944 25.2281 71.4944 25.0841C71.0984 24.8681 70.6784 24.7121 70.2344 24.6161C69.7904 24.5081 69.3044 24.4541 68.7764 24.4541C67.9244 24.4541 67.2104 24.6161 66.6344 24.9401C66.0584 25.2521 65.6264 25.7201 65.3384 26.3441C65.0624 26.9561 64.9244 27.7121 64.9244 28.6121C64.9244 29.9681 65.2484 30.9941 65.8964 31.6901C66.5564 32.3861 67.5284 32.7341 68.8124 32.7341C69.2444 32.7341 69.6884 32.6921 70.1444 32.6081C70.6004 32.5241 71.0504 32.4041 71.4944 32.2481L70.9724 33.3821V29.9261H69.3524C68.9924 29.9261 68.7164 29.8361 68.5244 29.6561C68.3324 29.4761 68.2364 29.2301 68.2364 28.9181C68.2364 28.5941 68.3324 28.3481 68.5244 28.1801C68.7164 28.0001 68.9924 27.9101 69.3524 27.9101H72.1784C72.5384 27.9101 72.8084 28.0061 72.9884 28.1981C73.1804 28.3901 73.2764 28.6661 73.2764 29.0261V33.2021C73.2764 33.5141 73.2164 33.7781 73.0964 33.9941C72.9764 34.2101 72.7724 34.3661 72.4844 34.4621C71.9444 34.6541 71.3384 34.8101 70.6664 34.9301C69.9944 35.0501 69.3284 35.1101 68.6684 35.1101ZM76.9158 35.0741C76.4598 35.0741 76.1118 34.9541 75.8718 34.7141C75.6318 34.4741 75.5118 34.1321 75.5118 33.6881V27.2981C75.5118 26.8541 75.6258 26.5181 75.8538 26.2901C76.0938 26.0501 76.4238 25.9301 76.8438 25.9301C77.2758 25.9301 77.6058 26.0501 77.8338 26.2901C78.0618 26.5181 78.1758 26.8541 78.1758 27.2981V28.2341H77.9958C78.1398 27.5141 78.4578 26.9561 78.9498 26.5601C79.4418 26.1641 80.0778 25.9421 80.8578 25.8941C81.1578 25.8701 81.3858 25.9481 81.5418 26.1281C81.7098 26.2961 81.7998 26.5781 81.8118 26.9741C81.8358 27.3461 81.7578 27.6401 81.5778 27.8561C81.4098 28.0721 81.1218 28.2041 80.7138 28.2521L80.2998 28.2881C79.6158 28.3481 79.1058 28.5461 78.7698 28.8821C78.4458 29.2181 78.2838 29.7041 78.2838 30.3401V33.6881C78.2838 34.1321 78.1638 34.4741 77.9238 34.7141C77.6958 34.9541 77.3598 35.0741 76.9158 35.0741ZM85.8299 35.1101C85.1819 35.1101 84.5999 34.9841 84.0839 34.7321C83.5679 34.4801 83.1659 34.1381 82.8779 33.7061C82.5899 33.2741 82.4459 32.7881 82.4459 32.2481C82.4459 31.6001 82.6139 31.0901 82.9499 30.7181C83.2859 30.3341 83.8319 30.0641 84.5879 29.9081C85.3439 29.7401 86.3459 29.6561 87.5939 29.6561H88.5479V31.0601H87.6119C86.9999 31.0601 86.5019 31.0961 86.1179 31.1681C85.7459 31.2281 85.4759 31.3361 85.3079 31.4921C85.1519 31.6481 85.0739 31.8641 85.0739 32.1401C85.0739 32.4761 85.1879 32.7521 85.4159 32.9681C85.6559 33.1841 85.9979 33.2921 86.4419 33.2921C86.7899 33.2921 87.0959 33.2141 87.3599 33.0581C87.6359 32.8901 87.8519 32.6681 88.0079 32.3921C88.1639 32.1041 88.2419 31.7801 88.2419 31.4201V29.3501C88.2419 28.8221 88.1219 28.4501 87.8819 28.2341C87.6419 28.0061 87.2339 27.8921 86.6579 27.8921C86.3339 27.8921 85.9799 27.9341 85.5959 28.0181C85.2239 28.0901 84.8099 28.2161 84.3539 28.3961C84.0899 28.5161 83.8559 28.5461 83.6519 28.4861C83.4479 28.4141 83.2919 28.2941 83.1839 28.1261C83.0759 27.9461 83.0219 27.7541 83.0219 27.5501C83.0219 27.3341 83.0819 27.1301 83.2019 26.9381C83.3219 26.7341 83.5199 26.5841 83.7959 26.4881C84.3599 26.2601 84.8879 26.1041 85.3799 26.0201C85.8839 25.9361 86.3459 25.8941 86.7659 25.8941C87.6899 25.8941 88.4459 26.0321 89.0339 26.3081C89.6339 26.5721 90.0839 26.9861 90.3839 27.5501C90.6839 28.1021 90.8339 28.8161 90.8339 29.6921V33.6881C90.8339 34.1321 90.7259 34.4741 90.5099 34.7141C90.2939 34.9541 89.9819 35.0741 89.5739 35.0741C89.1659 35.0741 88.8479 34.9541 88.6199 34.7141C88.4039 34.4741 88.2959 34.1321 88.2959 33.6881V33.0221L88.4219 33.1301C88.3499 33.5381 88.1939 33.8921 87.9539 34.1921C87.7259 34.4801 87.4319 34.7081 87.0719 34.8761C86.7119 35.0321 86.2979 35.1101 85.8299 35.1101ZM97.1994 35.1101C96.3714 35.1101 95.6754 34.9721 95.1114 34.6961C94.5594 34.4201 94.1454 34.0181 93.8694 33.4901C93.6054 32.9621 93.4734 32.2961 93.4734 31.4921V28.1081H92.7174C92.3814 28.1081 92.1174 28.0181 91.9254 27.8381C91.7454 27.6581 91.6554 27.4121 91.6554 27.1001C91.6554 26.7641 91.7454 26.5121 91.9254 26.3441C92.1174 26.1641 92.3814 26.0741 92.7174 26.0741H93.4734V24.7061C93.4734 24.2501 93.5934 23.9081 93.8334 23.6801C94.0734 23.4401 94.4094 23.3201 94.8414 23.3201C95.2854 23.3201 95.6214 23.4401 95.8494 23.6801C96.0774 23.9081 96.1914 24.2501 96.1914 24.7061V26.0741H97.9014C98.2374 26.0741 98.4954 26.1641 98.6754 26.3441C98.8554 26.5121 98.9454 26.7641 98.9454 27.1001C98.9454 27.4121 98.8554 27.6581 98.6754 27.8381C98.4954 28.0181 98.2374 28.1081 97.9014 28.1081H96.1914V31.3841C96.1914 31.8881 96.3054 32.2661 96.5334 32.5181C96.7734 32.7701 97.1514 32.8961 97.6674 32.8961C97.8474 32.8961 98.0154 32.8781 98.1714 32.8421C98.3274 32.8061 98.4714 32.7821 98.6034 32.7701C98.7714 32.7581 98.9094 32.8121 99.0174 32.9321C99.1254 33.0401 99.1794 33.2861 99.1794 33.6701C99.1794 33.9581 99.1314 34.2101 99.0354 34.4261C98.9394 34.6421 98.7714 34.7981 98.5314 34.8941C98.3754 34.9541 98.1594 35.0021 97.8834 35.0381C97.6194 35.0861 97.3914 35.1101 97.1994 35.1101ZM101.788 35.0561C101.344 35.0561 101.002 34.9301 100.762 34.6781C100.534 34.4141 100.42 34.0481 100.42 33.5801V27.4241C100.42 26.9441 100.534 26.5781 100.762 26.3261C101.002 26.0621 101.344 25.9301 101.788 25.9301C102.22 25.9301 102.55 26.0621 102.778 26.3261C103.018 26.5781 103.138 26.9441 103.138 27.4241V33.5801C103.138 34.0481 103.024 34.4141 102.796 34.6781C102.568 34.9301 102.232 35.0561 101.788 35.0561ZM101.788 24.4541C101.284 24.4541 100.894 24.3401 100.618 24.1121C100.354 23.8721 100.222 23.5361 100.222 23.1041C100.222 22.6601 100.354 22.3241 100.618 22.0961C100.894 21.8561 101.284 21.7361 101.788 21.7361C102.292 21.7361 102.676 21.8561 102.94 22.0961C103.204 22.3241 103.336 22.6601 103.336 23.1041C103.336 23.5361 103.204 23.8721 102.94 24.1121C102.676 24.3401 102.292 24.4541 101.788 24.4541ZM108.62 35.1101C108.092 35.1101 107.546 35.0621 106.982 34.9661C106.43 34.8701 105.926 34.7081 105.47 34.4801C105.23 34.3601 105.056 34.2101 104.948 34.0301C104.852 33.8381 104.81 33.6461 104.822 33.4541C104.834 33.2621 104.894 33.0881 105.002 32.9321C105.122 32.7761 105.272 32.6741 105.452 32.6261C105.644 32.5661 105.854 32.5841 106.082 32.6801C106.574 32.8841 107.024 33.0281 107.432 33.1121C107.84 33.1961 108.242 33.2381 108.638 33.2381C109.154 33.2381 109.526 33.1601 109.754 33.0041C109.994 32.8361 110.114 32.6201 110.114 32.3561C110.114 32.1161 110.036 31.9361 109.88 31.8161C109.724 31.6961 109.496 31.6121 109.196 31.5641L107.306 31.2221C106.562 31.0901 105.986 30.8201 105.578 30.4121C105.182 29.9921 104.984 29.4581 104.984 28.8101C104.984 28.2101 105.152 27.6941 105.488 27.2621C105.824 26.8181 106.286 26.4821 106.874 26.2541C107.474 26.0141 108.152 25.8941 108.908 25.8941C109.448 25.8941 109.946 25.9421 110.402 26.0381C110.858 26.1341 111.296 26.2901 111.716 26.5061C111.932 26.6141 112.082 26.7581 112.166 26.9381C112.262 27.1181 112.292 27.3041 112.256 27.4961C112.232 27.6881 112.16 27.8621 112.04 28.0181C111.92 28.1741 111.764 28.2761 111.572 28.3241C111.392 28.3721 111.182 28.3481 110.942 28.2521C110.558 28.0721 110.204 27.9461 109.88 27.8741C109.556 27.7901 109.244 27.7481 108.944 27.7481C108.404 27.7481 108.014 27.8381 107.774 28.0181C107.534 28.1861 107.414 28.4021 107.414 28.6661C107.414 28.8701 107.48 29.0441 107.612 29.1881C107.756 29.3201 107.972 29.4101 108.26 29.4581L110.15 29.8001C110.93 29.9321 111.524 30.1961 111.932 30.5921C112.34 30.9761 112.544 31.5041 112.544 32.1761C112.544 33.0881 112.184 33.8081 111.464 34.3361C110.756 34.8521 109.808 35.1101 108.62 35.1101Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_128_5400"
          x="-3.57227"
          y="0"
          width="133"
          height="56.9121"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_128_5400"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_128_5400"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
