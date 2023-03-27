import { Skeleton } from 'antd'
import React from 'react'
import './SkeletonLoad.css'
export default function SkeletonLoad() {
    return (
        <div className='row mt-4 mb-4'>
            <div className='col-3'>
            <Skeleton.Image active={true} style={{width:'100%', height:150}}/>
                <Skeleton
                active = {true}
                className='product-list-skeleton'
                    paragraph={{
                        rows: 3,
                    }}
                />
            </div>
            <div className='col-3'>
            <Skeleton.Image active={true} style={{width:'100%', height:150}}/>
                <Skeleton
                active = {true}
                className='product-list-skeleton'
                    paragraph={{
                        rows: 3,
                    }}
                />
            </div>
            <div className='col-3'>
            <Skeleton.Image active={true} style={{width:'100%', height:150}}/>
                <Skeleton
                active = {true}
                className='product-list-skeleton'
                    paragraph={{
                        rows: 3,
                    }}
                />
            </div>
            <div className='col-3'>
            <Skeleton.Image active={true} style={{width:'100%', height:150}}/>
                <Skeleton
                active = {true}
                className='product-list-skeleton'
                    paragraph={{
                        rows: 3,
                    }}
                />
            </div>
        </div>
    )
}
