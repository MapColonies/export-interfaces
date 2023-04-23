export enum ArtifactDEMType {
    MODEL = 'MODEL',
    METADATA = 'METADATA',
    ROI = 'ROI',
    LEGEND = 'LEGEND',
}

export enum ArtifactRasterType {
    GPKG = 'GPKG',
    LEGEND = 'LEGEND',
    METADATA = 'METADATA',
    THUMBNAILS_SMALL = 'THUMBNAILS_SMALL',
    THUMBNAILS_MEDIUM = 'THUMBNAILS_MEDIUM',
    THUMBNAILS_LARGE = 'THUMBNAILS_LARGE',
}

export enum Artifact3DType {
    _3D_MODEL = '3D_MODEL',
    METADATA = 'METADATA',
    THUMBNAILS_SMALL = 'THUMBNAILS_SMALL',
    THUMBNAILS_MEDIUM = 'THUMBNAILS_MEDIUM',
    THUMBNAILS_LARGE = 'THUMBNAILS_LARGE',
}

export declare type AtrifactType = ArtifactDEMType | ArtifactRasterType | Artifact3DType;
