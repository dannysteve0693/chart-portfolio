export type TypePieChart = {
    actual_in_day: string | number;
    target_in_day: string | number;
    actual_in_yesterday: string | number;
    target_in_yesterday: string | number;
    actual_in_month: string | number;
    target_in_month: string | number;
}

export type NeedleProps = {
    value: number;
    data: { name: string; value: number; color?: string, percent: number }[];
    cx: number;
    cy: number;
    iR: number;
    oR: number;
    color: string;
};

export type chartData = {
    name: string;
    value: number;
    color?: string;
    percent: number;
}

export type PieChartComponentProps = {
    text: string;
    contentData: chartData[];
    needleValue: number;
}


export type ApiItem = {
    stock_capacity_actual: number;
};

export type ChartItem = {
    name: string;
    uv: number;
    color: string;
};

export type PieChartDataProps = {
    name: string;
    value: number;
    color?: string;
    percent: number;
};

export type TableDataItem = {
    "no": number,
    "verhicle_name": string,
    "area_name": string,
    "target_qty_name": string,
    "target_qty_dec": number,
    "checkin_name": string,
    "checkout_name": string,
    "tanggal_temp": string,
    "barging_name": string,
    "date_temp": string,
    "ro_code": string,
    "start_time": string,
    "arrival_time": string,
    "final_time": string,
    "koordinat": string,
    "len_time": string,
    "len_timeVessel": string,
    "stockroom_destination": string,
    "sourc_area_name": string,
    "stockpile_destination": string,
    "dest_area_name": string,
    "barge_destination": string,
    "tugboat": string,
    "port_of_loading": string,
    "port_of_discharging": string,
    "pile_id": string,
    "vessel_name": string,
    "rute_name": string,
    "vessel_id": number,
    "start_from": string,
    "stock_pile_temp": string,
    "discarging_arrival_time": string,
    "discarging_depature_time": string,
    "vessel_arrival_time": string,
    "vessel_depature_time": string,
    "len_DiscargingVessel": string,
    "vehicle_id": number,
    "rute_id": number,
    "room_id": number,
    "room_spot_id": number,
    "stokcpile_id": number,
    "stokcpile_spot_id": number,
    "stock_pile": number,
    "stock_room": number,
    "sqm": number,
    "percentage": number,
    "sopir": number,
    "id": number,
    "createdBy": string,
    "createdAtName": string,
    "createdAt": string,
    "updatedBy": null,
    "updatedAtName": string,
    "updatedAt": null,
    "status": null,
    "isDelete": boolean
}

export type TableItem = {
    "page": number,
    "limit": number,
    "totalPages": number,
    "totalItems": number,
    "data": TableDataItem[]
}