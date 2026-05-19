# Plugin to add environment variables to the `site` object in Liquid templates
require 'active_support/time'

module Jekyll

  class SaleDates < Generator

    def generate(site)
      # Set sale_stage if environment specified.
      if !ENV['JEKYLL_ENV'].nil? && ENV['JEKYLL_ENV'] != 'production'
        site.config['sale_stage'] = ENV['JEKYLL_ENV']
      end

      @start_date = DateTime.parse(site.config['sale_start']).change(offset: '-0400')

      @dropoff = @start_date + 1
      @presale = @start_date + 2
      @sale_start = @start_date + 3
      @restocking = @start_date + 4
      @sale_end = @start_date + 5
      @pickup = @start_date + 6

      @season = @start_date.strftime("%m").to_i > 6 ? "Fall" : "Spring"
      @preseason = @start_date.strftime("%m").to_i > 6 ? "summer" : "winter"
      @next_season = @start_date.strftime("%m").to_i < 6 ? "Fall" : "Spring"
      @year = @start_date.strftime("%Y")

      site.config['schedule'] = {
        'start' => @start_date,
        'dropoff' => @dropoff,
        'presale' => @presale,
        'sale_start' => @sale_start,
        'restocking' => @restocking,
        'sale_end' => @sale_end,
        'pickup' => @pickup,
      }

      @times = site.config['times']

      site.config['dates'] = {
        'season' => @season,
        'preseason' => @preseason,
        'next_season' => @next_season,
        'year' => @year,
        'season_year' => "#{@season} #{@year}",
        'sale_dates' => "#{@sale_start.strftime('%B %-d')}#{ordinal(@sale_start.strftime('%-d'))} through #{@sale_end.strftime('%B %-d')}#{ordinal(@sale_end.strftime('%-d'))}",
        'vol_presale' => "#{@dropoff.strftime('%B %-d')}#{ordinal(@dropoff.strftime('%-d'))}",
        'presale' => "#{@presale.strftime('%B %-d')}#{ordinal(@presale.strftime('%-d'))}",
        'moms_night' => "#{@sale_start.strftime('%B %-d')}#{ordinal(@sale_start.strftime('%-d'))} from #{@times['moms_night']}",
        'discount_shopping' => "#{@sale_end.strftime('%B %-d')}#{ordinal(@sale_end.strftime('%-d'))} from #{@times['discount_consignors_volunteers']}",
        'dropoff' =>  "#{@start_date.strftime('%A, %B %-d')}#{ordinal(@start_date.strftime('%-d'))} from #{@times['dropoff_day1']}, #{@dropoff.strftime('%A, %B %-d')}#{ordinal(@dropoff.strftime('%-d'))} from #{@times['dropoff_day2']} *Restocking Consignors* drop-off #{@sale_start.strftime('%A, %B %-d')}#{ordinal(@sale_start.strftime('%-d'))} from #{@times['restocking_dropoff']}",
        'pickup' => "#{@pickup.strftime('%A, %B %-d')}#{ordinal(@pickup.strftime('%-d'))} from #{@times['pickup']}",
      }
    end

    def ordinal(day)
      case day
      when "1", "21", "31";
        "st"
      when "2", "22";
        "nd"
      when "3", "23";
        "rd"
      else
        "th"
      end
    end

  end

end
