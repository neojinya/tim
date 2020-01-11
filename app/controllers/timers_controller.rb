class TimersController < ApplicationController
  def index
    @hourly_wage
  end

  def new
    @timer = Timer.new
  end

  def show
  end

  def result
    # binding.pry
    time = params[:wage].to_f
    gon.hourly_wage = time / 60 / 60 #1時間を1秒分まで割る
    
    # timeis = 0
    # loop do #1秒分の値を増やし続けるが指定した条件になったらbreakでloopを抜ける
    #   @timeis
    #   sleep(1)
    #   timeis = timeis + hourly_wage
    #   @timeis = timeis
    #   if timeis >= 5
    #     break
    #   end
    # end
    
    
    # hourly(time)
    # redirect_to timers_index_path
  end
  
  

  # def hourly(time)
  #   # binding.pry
  #   test
    
  # end

  # def test
  #   # binding.pry
  #   # print(@hourly_wage, "¥n")
  # end
end
