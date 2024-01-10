import React from 'react';
import {Avatar, Button, Flex, Card} from "antd/lib";
import {CommentOutlined, HeartFilled, HeartOutlined} from "@ant-design/icons";

interface ChartCardProps {
  children:React.ReactNode
  title:string
  likeCount:number
  isLiked?: boolean
  onLikeClick?: ()=>void
  avatar: string
}

const ChartCard = ({children, title, likeCount=0, isLiked, onLikeClick, avatar }:ChartCardProps) => {

  return <Card size="small" title={title} bodyStyle={{padding: "0"}}>
    {children}


    <Flex align={'center'} justify={"space-between"} style={{borderTop:'1px solid rgba(0, 0, 0, 0.1)', padding: "0 10px"}}>
      <Avatar src={avatar} />

      <Flex align={"center"} style={{padding: '3px'}}>
        <Button onClick={onLikeClick} type="text" icon={isLiked?<HeartFilled />:<HeartOutlined />}  style={{background:'#fff'}}>
         <span > {likeCount}</span>
        </Button>

        <Button type="text" icon={<CommentOutlined />} style={{background:'#fff'}}>
          <span >3</span>
        </Button>

      </Flex>
    </Flex>
  </Card>
};


export default ChartCard