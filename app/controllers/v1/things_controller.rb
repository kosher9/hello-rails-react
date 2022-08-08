class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'some-things',
        :guid => '546c846-cw654-5cww4wc'
      }
    ] }.to_json
  end
end
