import React from "react"

interface Props {
  width: number
  height: number
  className?: string
}

export default function Logo({ width, height, className }: Props) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 1080 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1080" height="1080" rx="144" fill="#FB3792" />
      <path
        d="M383.607 653.138L479.774 299.891H604.506L448.671 762H368.056L383.607 653.138ZM296.327 299.891L392.494 653.138L408.681 762H327.113L172.23 299.891H296.327ZM709.991 565.54H590.973L590.338 492.542H686.822C704.173 492.542 718.032 490.638 728.399 486.829C738.767 482.809 746.279 476.99 750.934 469.373C755.8 461.756 758.233 452.234 758.233 440.809C758.233 427.69 755.8 417.111 750.934 409.07C746.067 401.03 738.344 395.211 727.765 391.614C717.397 387.806 703.961 385.901 687.457 385.901H632.867V762H521.466V299.891H687.457C716.021 299.891 741.518 302.535 763.946 307.825C786.375 312.903 805.418 320.732 821.075 331.312C836.944 341.891 849.005 355.221 857.257 371.302C865.509 387.171 869.635 405.896 869.635 427.479C869.635 446.31 865.615 463.978 857.574 480.481C849.534 496.985 836.098 510.421 817.267 520.789C798.647 530.945 773.15 536.235 740.777 536.658L709.991 565.54ZM705.548 762H563.995L602.081 676.307H705.548C720.782 676.307 732.949 673.979 742.047 669.324C751.357 664.458 758.022 658.11 762.042 650.281C766.274 642.241 768.39 633.354 768.39 623.621C768.39 611.772 766.38 601.51 762.359 592.835C758.551 584.16 752.415 577.495 743.951 572.84C735.488 567.973 724.168 565.54 709.991 565.54H616.363L616.998 492.542H729.034L755.06 521.741C785.951 520.472 810.39 524.809 828.375 534.754C846.572 544.699 859.584 557.817 867.413 574.109C875.242 590.402 879.156 607.435 879.156 625.208C879.156 655.465 872.597 680.75 859.479 701.062C846.572 721.375 827.211 736.609 801.397 746.766C775.584 756.922 743.634 762 705.548 762Z"
        fill="white"
      />
    </svg>
  )
}
