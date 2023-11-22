import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Box,
  Heading,
  useColorModeValue,
  Text,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

function BasicSongsPage(title, lyrics, video): SongItem {
  return (
    <>
      <Heading>Ca Chính Thức</Heading>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Container>
          <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
            {SONG_ITEMS.map((songItem) => (
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text fontSize="md">{songItem.title}</Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Box
                    as="iframe"
                    src={songItem.video}
                    width="100%"
                    sx={{
                      aspectRatio: "16/9",
                    }}
                  />
                  <Text color="gray.600">{songItem.lyrics}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Flex>
    </>
  );
}

interface SongItem {
  title: string;
  lyrics: string;
  video: string;
}

const SONG_ITEMS: Array<SongItem> = [
  {
    title: "Quốc Ca Việt Nam",
    lyrics: `Này công dân ơi, Đứng lên đáp lời sông núi,
        đồng lòng cùng đi hy sinh tiếc gì thân sống.
        Vì tương lai quốc dân cùng xông pha khói tên,
        làm sao cho núi sông từ nay luôn vững bền.
        
        Dù cho thây phơi trên gươm giáo,
        thù nước lấy máu đào đem báo.
        Nòi giống, lúc biến phải cần giải nguy,
        người công dân luôn vững bền tâm trí,
        hùng tráng quyết chiến đấu làm cho khắp nơi
        vang tiếng người nước Nam cho đến muôn đời.
        
        Công dân ơi, mau hiến thân dưới cờ.
        Công dân ơi, mau làm cho cõi bờ,
        thoát cơn tàn phá, vẻ vang nòi giống
        xứng danh nghìn năm dòng giống Lạc Hồng.`,
    video: "https://www.youtube.com/embed/VSKNMUW-oF0",
  },
  {
    title: "Thiếu Nhi Tân Hành Ca",
    lyrics: `Thiếu Nhi Việt Nam đứng lên trong giai đoạn mới,
    theo tiếng Giáo Hội và tiếng quê hương kêu mời.
    Được trang bị dũng mạnh bằng tinh thần mới,
    tuổi trẻ Việt Nam hăng hái xây thế hệ ngày mai.
    
    Cùng đi hỡi các Thiếu Nhi, cùng đi với Chúa Kitô.
    Nguồn Sống Thánh Thể chan hòa,
    là lý tưởng của người Thiếu Nhi hôm nay!
    
    Thiếu Nhi Việt Nam quyết tâm trong giai đoạn mới,
    thánh hóa môi trường rèn những khả năng phi thường.
    Bằng nguyện cầu hy sinh và một bầu khí mới,
    tuổi trẻ Việt Nam đem Chúa cho giới trẻ mọi nơi.`,
    video: "https://www.youtube.com/embed/VSKNMUW-oF0",
  },
  {
    title: "Ấu Nhi Ca",
    lyrics: `Đoàn em như những mầm mạ non xanh tươi,
    luôn vui cười luôn ngoan ngoãn sống đời Ấu Nhi.
    Nguyện bền chí theo gương Chúa Giê-Su tuổi thơ,
    dưới bóng cờ, em mang Chúa cho tuổi Ấu thơ.`,
    video: "https://www.youtube.com/embed/eHk3QP1ENOM?si=aVBhLdSCk-MZzeeo",
  },
  {
    title: "Thiếu Nhi Ca",
    lyrics: `Em Thiếu Nhi ơi, như ngàn tia sáng huy hoàng,
    vào buổi rạng đông đến mang nguồn hơi ấm.
    Em Thiếu Nhi ơi, em đẹp như hoa hướng dương,
    tươi dịu như hơi gió xuân, đem yên vui đến muôn người.
    
    Em Thiếu Nhi ơi, mắt nhìn em ví sao trời,
    nụ cười trên môi xóa tan màu u tối.
    Em Thiếu Nhi ơi, em là chiến sĩ Phúc Âm,
    gian khổ nguy khó chớ nao, vui mang Chúa đến cho người.`,
    video: "https://www.youtube.com/embed/cLIsU-e-x8U?si=x70zkjHkOarUHzIQ",
  },
  {
    title: "Nghĩa Sĩ Ca",
    lyrics: `Vui ca lên Nghĩa sĩ đời đầy diễm phúc.
    Hồn thanh xuân say niềm lý tưởng cao xa.
    Vì Nghĩa ra đi là đi Chinh Phục.
    Đường xa bóng Chúa đang chờ đợi ta.
    
    Một đời trẻ trung thành nồng hậu sức thiêng.
    Hùng dũng trung thành một dạ trung kiên.
    Tình bằng hữu, chân thành một dạ vững kiên.
    Tôn quý trách nhiệm sống gương hy sinh.
    
    Nghĩa Sĩ Việt Nam sẵn sàng hùng tráng,
    trong sạch hăng hái và quyết tiến bước.
    Lửa thần nung nấu tâm can không ngừng.
    Mầm thiêng ta gieo khắp nơi xa gần.
    
    Lý tưởng siêu nhiên thành tâm yêu mến.
    Danh Cha cả sáng, nước Cha trị đến.
    Noi gương nhiệt thành của Thánh Phaolô
    Xông pha lên đường làm chứng Phúc Âm.`,
    video: "https://www.youtube.com/embed/b-yxjo4XKHc?si=mo8VmbAvRaPnRuu0",
  },
  {
    title: "Hiệp Hành Ca",
    lyrics: `Dưới bóng cờ nêu gương Người Hiệp Sĩ trung kiên.
    Vì yêu Chúa ta nguyện Dấn Thân.
    Mang Đức Tin chiếu dọi vào Đình Trời.
    Mang mến yêu thắm gội vào lòng người.
    Người Hiệp Sĩ sống gương anh hào.
    
    Là Hiệp Sĩ cố gắng chiến đấu, cho nhà Đức Tin nêu gương cao trung,
    ta nguyên hiến thân, cho Giáo Hội trường sinh.
    Là Hiệp Sĩ, cố gắng chiến đấu, đem nguôn ủi an đi tôn non sông
    công bình khắp nơi, cho Nước Việt trường tôn.
    
    Dưới bóng cờ noi gương Mẹ Maria và các Thánh Tử Đạo Nước Nam.
    Cho giáo dân sống đạo nhiệt thành.
    Cho Quốc Dân thái bình và thịnh vượng.
    Người Hiệp Sĩ xứng danh Anh Hùng.`,
    video: "https://www.youtube.com/embed/7Cgq7JAooA8?si=fUYrHW9eQj3oTz6p",
  },
  {
    title: "Kinh Huynh Trưởng",
    lyrics: `Lạy Chúa Giêsu Huynh Trưởng Tối Cao,
    xin dạy con biết hy sinh cao thượng,
    phụng sự Chúa và giúp ích mọi người.
    Xin dạy con biết hy sinh không cần báo đáp,
    luôn xông pha không ngại bão táp,
    đẹp ý Cha trên trời, trong tình thương yêu hết mọi người.`,
    video: "https://www.youtube.com/embed/zHgXSal-JEs?si=mNnpaS9BOAGiGISa",
  },
  {
    title: "Kinh Đội Trưởng",
    lyrics: `Nguyện xin Giêsu anh cả từ nhân,
    ngày đêm ban xuống muôn ơn phúc cho đội của con.
    Giúp cho đoàn con nên những Tông Đồ nhiệt thành,
    mở rộng nước Chúa cứu rỗi các linh hồn.
    
    Đời con hy sinh nguy khó chẳng nề.
    Bền tâm bác ái yêu Chúa yêu người thiết tha.
    Rước lễ mỗi ngày dâng lên Cha tất cả cuộc sống.
    Xứng danh Tông Đồ của Chúa Giêsu.`,
    video: "https://www.youtube.com/embed/Kxc0_mHhKO4?si=MGfHYW62pDdAub1Z",
  },
  {
    title: "Kinh Dâng Ngày",
    lyrics: `Ngày nay con dâng cho Chúa, xin Chúa thương nhận lòng trí chúng con.
    Mọi cơn gian nan nguy khó, chúng con xin cầu theo ý Đức Giáo Hoàng sớm hôm.`,
    video: "https://www.youtube.com/embed/Kxc0_mHhKO4?si=MGfHYW62pDdAub1Z",
  },
  {
    title: "Kinh Dâng Đêm",
    lyrics: `Trời đã xế chiều, Giêsu ơi con nhờ tay Mẹ Maria,
    mà dâng lên Chúa, dâng chúc lời cám ơn, dâng trót cả xác hồn.
    Các việc con làm, các lời con xin, cùng với mọi khó nguy con chịu trót một ngày qua.
    Cùng với bóng chiều tà, Giêsu Maria, con hòa ca, dâng về nơi bao la.
    Chúa ban phép lành, một đêm ngủ an bình, hồn trong xác tươi xinh.`,
    video: "https://www.youtube.com/embed/Kxc0_mHhKO4?si=MGfHYW62pDdAub1Z",
  },
  {
    title: "Gọi Lửa",
    lyrics: `Lửa Thiêng ơi hãy đến, bừng sáng lên trong đêm âm u soi đời tăm tối bao nhiêu âu lo.
    Lửa Thiêng ơi hãy đến, bừng cháy lên, mang cho đời ngàn ánh vinh quang vui hân hoan.`,
    video: "https://www.youtube.com/embed/Kxc0_mHhKO4?si=MGfHYW62pDdAub1Z",
  },
  {
    title: "Chào Lửa Thiêng",
    lyrics: `Ố ô ô ồ, ố ô ô ồ.
    Cầm tay nhau quay vòng quanh lửa mới.
    Lửa bốc cháy tâm hồn ta hăng hái.
    Đón ánh lửa thiêng,
    đây đoàn ta, chung lời ca bên lửa bập bùng.
    
    Bập bập bùng lửa thiêng reo vui, nhạc trầm trầm hoà ca chơi vơi,
    lửa rực sáng chiếu đêm âm u
    anh em ơi, ta cùng nhau lên tiếng ca rằng (vỗ tay 3 cái).
    
    Lửa linh thiêng soi màn đêm u tối.
    Lửa cháy sáng ấm lòng ai lạnh lẽo.
    Lửa thiêng muôn đời,
    ta cùng vui đem lửa thiêng soi lòng mọi người.
    Ố ô ô ồ, ố ô ô ồ.`,
    video: "https://www.youtube.com/embed/Kxc0_mHhKO4?si=MGfHYW62pDdAub1Z",
  },
  {
    title: "Mang Lửa Về Tim",
    lyrics: `Màn đêm buông lơi theo ánh lửa dần tàn, tình anh em ta theo ánh lửa tràn lan.
    Tim ta đây còn khắc ghi bao nhiêu mối tình mặn nồng.
    Lửa đêm nay tan nhưng lửa thiêng còn cháy âm thầm ngàn đời.
    Biệt ly muôn phương ta nguyện đem Lửa Thiêng rải rắc khắp chốn.
    Mong mai sau ngọn Lửa Thiêng cháy lên đốt lòng mọi người.`,
    video: "https://www.youtube.com/embed/Kxc0_mHhKO4?si=MGfHYW62pDdAub1Z",
  },
  {
    title: "Kinh Trước Khi Ăn",
    lyrics: `Nguyện xin, nguyện xin Chúa Cả mở tay chúc phúc,
    cho chúng con dùng, cho chúng con dùng nên các thực phẩm này.`,
    video: "https://www.youtube.com/embed/Kxc0_mHhKO4?si=MGfHYW62pDdAub1Z",
  },
  {
    title: "Kinh Sau Khi Ăn",
    lyrics: `Đội ơn Chúa đời đời mạch sống, đã nuôi chúng con hồn xác hôm nay.
    Nguyện danh Chúa đời đời cả sáng, xuống cho mọi loài ơn lộc no đầy.`,
    video: "https://www.youtube.com/embed/Kxc0_mHhKO4?si=MGfHYW62pDdAub1Z",
  },
];
export default BasicSongsPage;
