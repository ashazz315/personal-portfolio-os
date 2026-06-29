"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import type { EChartsOption } from "echarts";

const option: EChartsOption = {
  backgroundColor: "transparent",
  color: ["#14b8a6", "#f59e0b", "#f43f5e"],
  tooltip: {
    trigger: "axis",
    backgroundColor: "#111827",
    borderColor: "#1f2937",
    textStyle: { color: "#f9fafb" },
  },
  grid: {
    top: 36,
    right: 18,
    bottom: 32,
    left: 38,
  },
  legend: {
    top: 0,
    right: 0,
    textStyle: { color: "#475569", fontSize: 11 },
    itemWidth: 10,
    itemHeight: 10,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    axisLine: { lineStyle: { color: "#cbd5e1" } },
    axisTick: { show: false },
    axisLabel: { color: "#64748b", fontSize: 11 },
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    splitNumber: 4,
    axisLabel: { color: "#64748b", fontSize: 11 },
    splitLine: { lineStyle: { color: "#e2e8f0" } },
  },
  series: [
    {
      name: "Data",
      type: "line",
      smooth: true,
      symbolSize: 6,
      data: [46, 52, 61, 68, 77, 84],
      areaStyle: { opacity: 0.08 },
    },
    {
      name: "Product",
      type: "line",
      smooth: true,
      symbolSize: 6,
      data: [38, 48, 55, 62, 71, 78],
      areaStyle: { opacity: 0.06 },
    },
    {
      name: "AI",
      type: "line",
      smooth: true,
      symbolSize: 6,
      data: [22, 36, 49, 64, 76, 88],
      areaStyle: { opacity: 0.05 },
    },
  ],
};

export function InsightChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    chart.setOption(option);

    const resizeObserver = new ResizeObserver(() => chart.resize());
    resizeObserver.observe(chartRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} className="h-[260px] w-full" aria-label="能力增长趋势图" />;
}
