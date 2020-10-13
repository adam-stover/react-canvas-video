export interface GetCopyVideoFromArea {
  (videoWidth: number, videoHeight: number): { [index: string] : { x: number, y: number, width: number, height: number }}
} 

export const getCopyVideoFromArea: GetCopyVideoFromArea = (videoWidth, videoHeight) => {
  return {
    2: { x: videoWidth / 4, y: 0, width: videoWidth / 2, height: videoHeight},
    3: { x: videoWidth / 3, y: 0, width: videoWidth / 3, height: videoHeight},
    4: { x: 0, y: 0, width: videoWidth, height: videoHeight},
    6: { x: videoWidth / 6, y: 0, width: videoWidth * 0.66, height: videoHeight},
    9: { x: 0, y: 0, width: videoWidth, height: videoHeight}
  }
}