"use client"; 

import { LineChart, TrendingDown, TrendingUp } from 'lucide-react';
import React from 'react'
import {formatDistanceToNow,format} from 'date-fns'
const DashboardView = ({insights}) => {
  const salaryData=insights.salaryRanges.map((range)=>({
    name:range.role,
    min:range.min/1000,
    max:range.max/1000,
    median:range.median/1000,
  }));
  const getDemandLevelColor=(level)=>{
    switch(level.toLowerCase()){
      case "high":
        return "bg-green-500";
        case "medium":
          return "bg-yellow-500";
          case "low":
            return "bg-red-500";
            default:
              return "bg-gray-500";
    }
  };
  const getMarketOutlookInfo=(outlook)=>{
    switch(outlook.toLowerCase()){
      case "positive":
          return {icon:TrendingUp,color:"text-green-500"};
      case "neutral":
        return { icon: LineChart,color:"text-yellow-500"};
      case "negitive":
        return {icon:TrendingDown,color:"text-red-500"};
      default:
        return {icon:LineChart,color:"Text-gray-500"};
    }
  };
  const OutlookIcon=getMarketOutlookInfo(insights.marketOutlool).icon;
  const OutlookColor=getMarketOutlookInfo(insights.marketOutlool).icon;
  const lastUpdateDate=format(newDate(insights.lastUpdated),'dd/mm/yy');
  const nextupdateDistance=formatDistanceToNow(
new Date(insights.nextUpdate),
{addSuffix:true}
  );
  return (
    <div>DashboardView</div>
  )
}

export default DashboardView 