import React, { Component } from 'react';
class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className='text'>STT</th>
                                <th className='text'>Mã</th>
                                <th className='text'>Tên</th>
                                <th className='text'>Giá</th>
                                <th className='text'>Trạng Thái</th>
                                <th className='text'>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ProductList;
