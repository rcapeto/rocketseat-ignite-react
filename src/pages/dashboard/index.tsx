import { NextPage } from 'next';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic'; //para carregar no frontend e não no backend
import { ApexOptions } from 'apexcharts';
 
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
//ssr => false => só vai ser carregado ao lado do browser

const options: ApexOptions = {
   chart: {
      toolbar: {
         show: false,
      },
      zoom: {
         enabled: false,
      },
      foreColor: theme.colors.gray[500]
   },
   grid: {
      show: false
   },
   dataLabels: {
      enabled: false, 
   },
   tooltip: {
      enabled: false
   },
   xaxis: {
      type: 'datetime',
      axisBorder: {
         color: theme.colors.gray[600],
      },
      axisTicks: {
         color: theme.colors.gray[600],
      },
      categories: [
         ...[18, 19, 20, 21, 22, 23].map(day => new Date(2021, 2, day).toISOString()),
      ],
   },
   fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
         shade: 'dark',
         opacityFrom: 0.7,
         opacityTo: 0.3
      }
   }
};

const series = [
   { name: 'Series1', data: [31, 120, 10, 28, 61, 189] }
];

const Dashboard: NextPage = () => {
   return(
      <Flex direction="column" h="100vh" mt="3">
         <Header />
         <Flex w="100%" my="6" maxW={1480} px="6" mx="auto">
            <Sidebar />

            <SimpleGrid flex="1" gap="4" minChildWidth="320px">
               <Box 
                  p="8"
                  bg="gray.800"
                  borderRadius={8}
                  pb="4"
               >
                  <Text fontSize="lg" mb="4">Inscritos da semana</Text>

                  <Chart 
                     type="area"
                     height={168}
                     series={series}
                     options={options}
                  />
               </Box>
               <Box 
                  p="8"
                  bg="gray.800"
                  pb="4"
                  borderRadius={8}
               >
                  <Text fontSize="lg" mb="4">Taxa de abertura</Text>

                  <Chart 
                     type="area"
                     height={168}
                     series={series}
                     options={options}
                  />
               </Box>
            </SimpleGrid>
         </Flex>
      </Flex>
   );
};

export default Dashboard;