const appointmentsData = [
    {
      "clientId": "27962e24-cd6a-4d0a-a9f9-ca916edc3e05",
      "appointmentId": "161cd5a5-199e-42f1-8a42-be0e94f4a204",
      "date": "2023-12-14",
      "time": "02:31"
    },
    {
      "clientId": "9e90e993-09e3-4a10-8d51-47c6692a0fee",
      "appointmentId": "0dcb68cd-f769-413c-ab51-a8c2df24a601",
      "date": "2023-12-13",
      "time": "19:17"
    },
    {
      "clientId": "9e90e993-09e3-4a10-8d51-47c6692a0fee",
      "appointmentId": "31279553-a726-43e8-96c7-2fa6528dabfc",
      "date": "2023-12-09",
      "time": "19:09"
    },
    {
      "clientId": "dbe0fe1a-53fd-4cd0-a549-ace670dc4131",
      "appointmentId": "ea91e1ef-9e7a-438f-9a0b-0395a63e87e6",
      "date": "2023-12-08",
      "time": "11:32"
    },
    {
      "clientId": "49607c1f-0f77-4470-8c74-32bdc36edde4",
      "appointmentId": "6ef36897-6632-4d1b-b3f2-77bf05d8ea14",
      "date": "2023-12-29",
      "time": "03:00"
    },
    {
      "clientId": "49607c1f-0f77-4470-8c74-32bdc36edde4",
      "appointmentId": "42e753f7-3743-4184-afb2-42d973894c6d",
      "date": "2024-01-02",
      "time": "08:44"
    },
    {
      "clientId": "3c1e09a9-0d1e-43b9-a07f-601589c420b0",
      "appointmentId": "783ad30b-119d-4863-8628-3c6cc0120e2c",
      "date": "2023-12-31",
      "time": "06:37"
    },
    {
      "clientId": "3c1e09a9-0d1e-43b9-a07f-601589c420b0",
      "appointmentId": "0863d3ff-5ee7-4421-b0c3-0412001d2247",
      "date": "2023-12-11",
      "time": "12:37"
    },
    {
      "clientId": "3c1e09a9-0d1e-43b9-a07f-601589c420b0",
      "appointmentId": "f3e0ccbe-45cb-4717-9f3c-d418e4f53cc3",
      "date": "2023-12-06",
      "time": "00:10"
    },
    {
      "clientId": "df18305b-dc1a-4601-9a5d-575cfd9d9e77",
      "appointmentId": "0f36b649-be1c-4568-a9f1-b4c2870a8074",
      "date": "2023-12-07",
      "time": "18:21"
    },
    {
      "clientId": "bd113a52-e3e7-4727-9311-175ce02ff09c",
      "appointmentId": "2541fc09-b7c1-4217-8e35-0583e0601d16",
      "date": "2023-12-24",
      "time": "00:47"
    },
    {
      "clientId": "6fbafb79-3b62-472e-a3e4-3c46d7ac7700",
      "appointmentId": "90bcdad9-9ea6-4d5e-9b44-32f224982ae6",
      "date": "2023-12-30",
      "time": "17:42"
    },
    {
      "clientId": "f050e21a-98bf-43cc-be42-3c72da6f293a",
      "appointmentId": "6d199f93-c3d6-44a0-9fe6-e34fe87e9263",
      "date": "2023-12-06",
      "time": "17:47"
    },
    {
      "clientId": "f050e21a-98bf-43cc-be42-3c72da6f293a",
      "appointmentId": "241ee6ad-3b4f-49e3-84e7-76ad0886ec6b",
      "date": "2023-12-11",
      "time": "07:46"
    },
    {
      "clientId": "f050e21a-98bf-43cc-be42-3c72da6f293a",
      "appointmentId": "f67d4622-0ffb-4a0b-b992-094facb63e8c",
      "date": "2023-12-27",
      "time": "00:35"
    },
    {
      "clientId": "74c69398-3c5b-47a4-9ae4-147c1389278d",
      "appointmentId": "f631ea29-b2ac-4b57-9476-8d4229871765",
      "date": "2023-12-17",
      "time": "03:37"
    },
    {
      "clientId": "74c69398-3c5b-47a4-9ae4-147c1389278d",
      "appointmentId": "838d4820-57ab-45ee-ba23-38dbec93b7e1",
      "date": "2024-01-01",
      "time": "13:20"
    },
    {
      "clientId": "6a85152c-5874-470d-9247-c613ae950bfd",
      "appointmentId": "3f4cb618-3d30-4719-8f3e-5b6f7dcd1166",
      "date": "2023-12-17",
      "time": "07:59"
    },
    {
      "clientId": "925f20df-6d2a-4cbd-8865-8ab1b3d651ec",
      "appointmentId": "5035d16a-31b2-4592-a75f-aa8ff7233624",
      "date": "2024-01-01",
      "time": "05:45"
    },
    {
      "clientId": "5d46c1f7-dd7a-481d-a4ac-90f4d3786a70",
      "appointmentId": "89365ec6-a16a-489a-88eb-65ae0c24927a",
      "date": "2023-12-27",
      "time": "20:06"
    },
    {
      "clientId": "5d46c1f7-dd7a-481d-a4ac-90f4d3786a70",
      "appointmentId": "f094b8df-bebe-445f-a2d4-d27cf34a3080",
      "date": "2023-12-06",
      "time": "01:54"
    },
    {
      "clientId": "5d46c1f7-dd7a-481d-a4ac-90f4d3786a70",
      "appointmentId": "c26d186e-7149-44db-9a86-ad64b6b06de4",
      "date": "2023-12-24",
      "time": "02:02"
    },
    {
      "clientId": "047fcb6e-24c2-4108-9ffd-139b224d8956",
      "appointmentId": "ad1ac3f1-efbe-4768-9161-ef384ec776ed",
      "date": "2024-01-02",
      "time": "09:06"
    },
    {
      "clientId": "047fcb6e-24c2-4108-9ffd-139b224d8956",
      "appointmentId": "884da478-2e8f-406b-9dfd-ad71d5298349",
      "date": "2023-12-12",
      "time": "04:32"
    },
    {
      "clientId": "c2243839-9259-4f87-9ac2-b63998b9ae6f",
      "appointmentId": "3ac05b66-733f-4ecc-9b70-2a1f2d4b0a04",
      "date": "2023-12-09",
      "time": "07:26"
    },
    {
      "clientId": "c2243839-9259-4f87-9ac2-b63998b9ae6f",
      "appointmentId": "801f91ff-2a66-4096-8fb7-cfa012e09d8e",
      "date": "2023-12-09",
      "time": "05:27"
    },
    {
      "clientId": "1ef82741-bcc1-44ca-b87a-5e4ebe1135c3",
      "appointmentId": "a925eb12-739d-4a66-973a-732b1269eaf1",
      "date": "2023-12-28",
      "time": "20:19"
    },
    {
      "clientId": "fa2c9c0a-882d-4c30-855d-61ed1f73684a",
      "appointmentId": "3e528c48-6c62-48b7-aead-df4c3140c5b2",
      "date": "2023-12-15",
      "time": "16:07"
    },
    {
      "clientId": "fa2c9c0a-882d-4c30-855d-61ed1f73684a",
      "appointmentId": "e2278c43-2163-4c35-b758-edd9368dbaeb",
      "date": "2023-12-16",
      "time": "19:16"
    },
    {
      "clientId": "0b095f51-5abf-4bd9-818a-311b47a0d380",
      "appointmentId": "dd6f0347-0929-4fd0-a8c9-38ec070e56f7",
      "date": "2023-12-07",
      "time": "15:54"
    },
    {
      "clientId": "cb370016-38d0-4eb5-bd00-89a14be8e2a0",
      "appointmentId": "4a69d314-3616-43c8-8e34-e42ef636a4df",
      "date": "2023-12-18",
      "time": "21:12"
    },
    {
      "clientId": "40e650be-0b67-4a24-888c-756f89a47400",
      "appointmentId": "56bbf583-8ae3-4b00-97e8-a955448df9ab",
      "date": "2023-12-18",
      "time": "21:13"
    },
    {
      "clientId": "40e650be-0b67-4a24-888c-756f89a47400",
      "appointmentId": "f2650ae7-0d66-4f74-b839-494b16f2fd88",
      "date": "2023-12-08",
      "time": "16:25"
    },
    {
      "clientId": "afa94c7f-09bb-4c3b-b3c4-5274cbf148e6",
      "appointmentId": "5e0369de-045b-4c07-b638-ecde58e5ff62",
      "date": "2024-01-02",
      "time": "04:28"
    },
    {
      "clientId": "afa94c7f-09bb-4c3b-b3c4-5274cbf148e6",
      "appointmentId": "47245bd9-1087-4b40-a6f2-24d1cf0356f3",
      "date": "2023-12-08",
      "time": "09:14"
    },
    {
      "clientId": "0c1f8062-65ab-42dc-8e46-9b633c63d819",
      "appointmentId": "357a7680-f38f-496c-9b84-8012a7ad16ef",
      "date": "2023-12-06",
      "time": "23:32"
    },
    {
      "clientId": "e508341f-5185-4e39-9ca2-15ce9cd9f0ad",
      "appointmentId": "a69267d4-84d7-4e90-b2bc-205d20a3d631",
      "date": "2023-12-12",
      "time": "17:16"
    },
    {
      "clientId": "e508341f-5185-4e39-9ca2-15ce9cd9f0ad",
      "appointmentId": "987a5ab1-2dac-4c47-81a5-8c323b3cad14",
      "date": "2023-12-17",
      "time": "20:46"
    },
    {
      "clientId": "428fd50a-a2e5-4bc9-acbe-6b86586aef2a",
      "appointmentId": "f6be313c-904f-47bc-9d12-8e7fa1b1fe13",
      "date": "2024-01-01",
      "time": "23:19"
    },
    {
      "clientId": "428fd50a-a2e5-4bc9-acbe-6b86586aef2a",
      "appointmentId": "35134ace-e3e8-4938-b692-9d6aac1bb816",
      "date": "2023-12-26",
      "time": "01:31"
    },
    {
      "clientId": "428fd50a-a2e5-4bc9-acbe-6b86586aef2a",
      "appointmentId": "1915ca8c-3606-4cce-aeb7-9c687ee36766",
      "date": "2023-12-21",
      "time": "20:04"
    },
    {
      "clientId": "8dd5b2d2-05d3-4859-b65b-f47f7915e086",
      "appointmentId": "1c3e2bf6-a6d7-4460-90e7-83e5b60fedd9",
      "date": "2023-12-29",
      "time": "18:38"
    },
    {
      "clientId": "4695ba36-8d29-4303-9e0c-2965e4491d61",
      "appointmentId": "eb2b6760-fb79-4233-a538-ad817f788467",
      "date": "2024-01-02",
      "time": "11:00"
    },
    {
      "clientId": "a5670b05-0f26-470f-acce-3783e5b46640",
      "appointmentId": "73bb5b83-3b64-41cb-bbd8-4c83ee60c1a3",
      "date": "2023-12-23",
      "time": "08:40"
    },
    {
      "clientId": "a5670b05-0f26-470f-acce-3783e5b46640",
      "appointmentId": "6ea7eb8d-5ee2-451b-9fd4-6ac63bd91d2f",
      "date": "2023-12-21",
      "time": "06:06"
    },
    {
      "clientId": "41bd3190-0c80-45bf-a06e-64bd30841f8d",
      "appointmentId": "c4a3b436-d530-4df9-ba7e-f02d7671aab2",
      "date": "2023-12-28",
      "time": "14:00"
    },
    {
      "clientId": "41bd3190-0c80-45bf-a06e-64bd30841f8d",
      "appointmentId": "390d2b37-09c1-49f4-9c9f-e55940454659",
      "date": "2023-12-24",
      "time": "20:55"
    },
    {
      "clientId": "911ba857-633a-40ef-ba7c-7d96aae55a9a",
      "appointmentId": "7848f0c5-dc25-4dca-ad08-dd59480bf179",
      "date": "2023-12-18",
      "time": "05:41"
    },
    {
      "clientId": "911ba857-633a-40ef-ba7c-7d96aae55a9a",
      "appointmentId": "a33a5a68-93dd-47bb-b59c-f3c7b89073c6",
      "date": "2023-12-06",
      "time": "03:08"
    },
    {
      "clientId": "4ba14292-9dfa-405d-903e-7614910f8ca3",
      "appointmentId": "37db4c81-c9b6-4302-b939-31e0cd00ac04",
      "date": "2024-01-02",
      "time": "02:30"
    },
    {
      "clientId": "4ba14292-9dfa-405d-903e-7614910f8ca3",
      "appointmentId": "99801258-e0ae-46b5-8a88-61706abfec5d",
      "date": "2023-12-14",
      "time": "02:35"
    },
    {
      "clientId": "109fbd1e-3bb3-49a9-9b48-661fc172d2b7",
      "appointmentId": "b176f054-6cf4-4b16-b68d-5dfab790f61a",
      "date": "2023-12-19",
      "time": "22:51"
    },
    {
      "clientId": "c82f1082-33ed-4cd4-9d07-f982f1b1d533",
      "appointmentId": "10d0f6a5-7c8d-4be6-af2c-e55b3dc2971f",
      "date": "2024-01-01",
      "time": "15:07"
    },
    {
      "clientId": "b9427cbb-0496-4e30-be13-33159e202033",
      "appointmentId": "f3c9d298-a9da-46c8-a39a-c88c448407c9",
      "date": "2024-01-03",
      "time": "03:07"
    },
    {
      "clientId": "b9427cbb-0496-4e30-be13-33159e202033",
      "appointmentId": "0afabee2-412b-472a-b591-afe29913a434",
      "date": "2023-12-08",
      "time": "08:05"
    },
    {
      "clientId": "b9427cbb-0496-4e30-be13-33159e202033",
      "appointmentId": "280b67b4-76d5-4eed-89a9-ab06c1569589",
      "date": "2023-12-10",
      "time": "09:49"
    },
    {
      "clientId": "1d452038-b944-4b9a-b203-fbf53272c191",
      "appointmentId": "b6be4a44-31a9-4d82-b7f6-fda44dadcad0",
      "date": "2023-12-22",
      "time": "16:43"
    },
    {
      "clientId": "e3eb6064-27bd-4b0e-9684-a7dd98877b26",
      "appointmentId": "e95db2c9-6a50-4f97-9739-46733046c390",
      "date": "2023-12-08",
      "time": "08:36"
    },
    {
      "clientId": "1fccbb1f-a79b-49a0-a37b-e3911dda4441",
      "appointmentId": "ab5b4369-b251-46ec-ab4e-4bfcfe82c463",
      "date": "2023-12-25",
      "time": "17:52"
    },
    {
      "clientId": "1fccbb1f-a79b-49a0-a37b-e3911dda4441",
      "appointmentId": "0fc4fba8-f693-4404-89cc-a52d3f9a4d6c",
      "date": "2023-12-08",
      "time": "23:55"
    },
    {
      "clientId": "1fccbb1f-a79b-49a0-a37b-e3911dda4441",
      "appointmentId": "05180736-280b-4293-93c2-f5614ff8ae77",
      "date": "2023-12-20",
      "time": "23:14"
    },
    {
      "clientId": "58520d5f-c766-43d8-9619-33503f64039b",
      "appointmentId": "f34ff674-cf29-45e6-bf1b-737972cf0fd0",
      "date": "2023-12-25",
      "time": "18:34"
    },
    {
      "clientId": "58520d5f-c766-43d8-9619-33503f64039b",
      "appointmentId": "67f335f5-74b1-4e21-85a7-88f0a8541a92",
      "date": "2023-12-18",
      "time": "08:34"
    },
    {
      "clientId": "58520d5f-c766-43d8-9619-33503f64039b",
      "appointmentId": "f2462d86-cbdc-4b0f-a065-4a0345b76a79",
      "date": "2023-12-14",
      "time": "17:18"
    },
    {
      "clientId": "e3db64e7-737f-4123-9984-39f62b70f72b",
      "appointmentId": "ade36345-d73d-4770-9ba6-773c6864b082",
      "date": "2023-12-16",
      "time": "17:22"
    },
    {
      "clientId": "e3db64e7-737f-4123-9984-39f62b70f72b",
      "appointmentId": "369d8983-46c9-48e2-8625-fceb4a7bc61f",
      "date": "2023-12-24",
      "time": "14:15"
    },
    {
      "clientId": "24cb3ad0-ede3-4541-b7d7-524049691db9",
      "appointmentId": "26fd1aca-88cf-4149-9846-d7aca5660fc8",
      "date": "2023-12-08",
      "time": "23:27"
    },
    {
      "clientId": "24cb3ad0-ede3-4541-b7d7-524049691db9",
      "appointmentId": "a40de3ba-79b1-4bc4-a586-301671730420",
      "date": "2023-12-20",
      "time": "23:05"
    },
    {
      "clientId": "24cb3ad0-ede3-4541-b7d7-524049691db9",
      "appointmentId": "9e771baf-96a9-4be2-9600-046843cf7555",
      "date": "2023-12-18",
      "time": "05:22"
    },
    {
      "clientId": "5411f51a-cc20-4402-82a7-0da90a3f22ec",
      "appointmentId": "0c416dac-cdeb-4a72-8084-7c1c1bd2fc56",
      "date": "2023-12-22",
      "time": "01:34"
    }
  ];
  
  export default appointmentsData;