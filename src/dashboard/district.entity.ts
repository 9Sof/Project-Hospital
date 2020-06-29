import { BaseEntity, Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class District extends BaseEntity {
    @PrimaryColumn() id: number;

    @Column() name_th: string;

    @Column() name_en: string;

    @Column() province_id: number;
}